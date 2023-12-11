import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    useWindowDimensions,
    ScrollView,
    Pressable
} from 'react-native';
import products from '../data/products';

const ProductDetailsScreen = () => {
    const product = products[0];

    const { width } = useWindowDimensions();

    const styles = createStyles(width);

    const addTocart = () => {
        // console.warn('Add to cart'); // way to debug to screen in dev


    }

    return (
        <View>
            <ScrollView>
                {/* Image carousel */}
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image
                            source={{ uri: item }}
                            style={styles.image}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />

                {/* Text Container */}
                <View style={styles.textContainer}>
                    {/* Title */}
                    <Text style={styles.title}>{product.name}</Text>

                    {/* Price */}
                    <Text style={styles.price}>${product.price}</Text>

                    {/* Description */}
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* Add to cart button */}
            <Pressable onPress={addTocart} style={styles.button}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>
        </View>
    )
}

const createStyles = (windowWidth) => {
    return StyleSheet.create({
        image: {
            width: windowWidth,
            aspectRatio: 1,
        },
        textContainer: {
            padding: 20
        },
        title: {
            fontSize: 34,
            fontWeight: '500',
            marginVertical: 10
        },
        price: {
            fontSize: 16,
            fontWeight: '500',
            letterSpacing: 1.5
        },
        description: {
            marginVertical: 10,
            fontSize: 18,
            fontWeight: '300',
            lineHeight: 30,
        },
        button: {
            position: 'absolute',
            backgroundColor: 'black',
            bottom: 30,
            width: '90%',
            alignSelf: 'center',
            padding: 20,
            borderRadius: 100,
            alignItems: 'center'
        },
        buttonText: {
            color: 'white',
            fontWeight: '500',
            fontSize: 16
        }
    })
}

export default ProductDetailsScreen;