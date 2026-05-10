// insert defaut carts(fake) in the search page before every search.

import RealCart from "./realCart";
import { Standardcarts } from "./standardCarts";


type FakeCardsProps = {
    positions : string[]
};



//father component
export default function FakeCarts({ positions }: FakeCardsProps) {
    return (
        <>
        {Standardcarts.map((cart, index) => {
            return (
            <RealCart
                key={cart.code}
                code={cart.code}
                extraClass={positions[index]}
                foodImage={cart.foodImage}
                nameText={cart.nameText}
                timeText={cart.timeText}
                healthy={cart.healthy}
            />
            );
        })}
        </>
    );
}