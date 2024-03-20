import cart from "../assets/carrt.png";

export  const CartWidget = () => {
    return (
        <div id="cart-widget" class="mx-auto">
        <img src={cart} alt="logoDeCarrito" />
        <span>21</span>
        </div>
    )
}
