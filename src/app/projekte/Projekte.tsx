// External deps
import React, { FC } from 'react';

// Internal deps
import Main from "layouts/Main";
import Card from "components/common/Card";
import cards from "mocks/cards.json";
import Button from "components/ui/Button";

// specific moc import
const images = {
    card1: require("media/images/card/card1.jpg"),
    card2: require("media/images/card/card2.jpg"),
    card3: require("media/images/card/card3.jpg"),
    card4: require("media/images/card/card4.jpg"),
    card5: require("media/images/card/card5.jpg"),
    card6: require("media/images/card/card6.jpg"),
    card7: require("media/images/card/card7.jpg"),
    card8: require("media/images/card/card8.jpg"),
}

const Projekte: FC = () => {
    return (
        <Main>
            <div className="flex flex-col md:flex-row mb-4 md:mb-0 gap-2 pb-4 md:pb-10">
                <Button text="Alle" classes="min-w-[230px]" type="custom" />
                <Button text="Neubau" classes="min-w-[230px]" viewType="secondary" type="custom" />
                <Button text="Umbau" classes="min-w-[230px]" viewType="secondary" type="custom" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map((card, index) => {
                    const isFullWidth = (index + 1) % 3 === 0;

                    return (
                        <Card
                            key={card.id}
                            id={String(card.id)}
                            title={card.title}
                            type={card.type}
                            subTitle={card.subTitle}
                            imgPath={images[card.imgPath]}
                            classes={isFullWidth ? 'col-span-1 md:col-span-2' : ''}
                        />
                    )
                })}
            </div>
        </Main>
    )
};

export default Projekte;
