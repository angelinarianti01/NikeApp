import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';

const ShoppingCartTotals = () => (
    <View style={styles.totalsContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>410,00 us$</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>410,00 us$</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>410,00 us$</Text>
        </View>
    </View>
)

const ShoppingCart = () => {

    const checkout = () => { }

    return (
        <>
            <FlatList
                data={cart}
                renderItem={({ item }) => (
                    <CartListItem cartItem={item} />
                )}
                ListFooterComponent={ShoppingCartTotals}
            />
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    totalsContainer: {
        borderTopColor: 'gainsboro',
        borderTopWidth: 1,
        margin: 20,
        paddingTop: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: 'gray',
        fontSize: 16
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500'
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

export default ShoppingCart;