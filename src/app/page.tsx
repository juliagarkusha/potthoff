// External deps
import React, { FC } from 'react';

// Internal deps
import Main from 'layouts/Main';
import InfoCard from "components/common/InfoCard";

const Home: FC = () => {
    return (
        <Main>
            <InfoCard
                classes="py-10"
                bg="bg-gradient-to-r from-[#242C34] to-[#023490]"
            >
                <div className="p-[50px] lg:p-[100px] w-full">
                    <div className="pb-[100px]">
                        <p className="text-[#ffffff] font-clash-display text-center text-[24px] leading-[32px]">Potthoff Gruppe</p>
                        <p className="text-[#ffffff] font-clash-display font-bold text-center text-[48px] leading-[54px] lg:text-[100px] lg:leading-[100px]">Alles aus einer Hand</p>
                    </div>
                    <div>
                        <p className="text-[#E8EAEE] font-clash-display text-center text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px]">
                            Umfassendes Know-how, wirtschaftliches Bauen und Zuverlässigkeit zeichnen das besondere Angebot von Potthoff aus. Wir überzeugen durch Lösungen mit Mehrwert, konsequente Beratung und nachhaltige Zusammenarbeit.
                        </p>
                    </div>
                </div>
            </InfoCard>
            <InfoCard
                classes="py-10"
                bg="bg-gradient-to-r from-[#3077FA] to-[#1E5790]"
            >
                <div className="py-[50px] lg:py-[100px] w-full grid grid-cols-1 md:grid-cols-2 gap-[50px]">
                    <div className="flex flex-col items-center justify-center w-full">
                        <p className="text-[#ffffff] font-clash-display text-[64px] font-medium leading-[64px] 2xl:text-[120px] 2xl:leading-[134px]">65+</p>
                        <span className="text-[#E8EAEE] text-center font-clash-display text-[18px] leading-[28px] lg:text-[24px] lg:leading-[32px]">unsere langjährige Erfahrung</span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <p className="text-[#ffffff] font-clash-display text-[64px] font-medium leading-[64px] 2xl:text-[120px] 2xl:leading-[134px]">75+</p>
                        <span className="text-[#E8EAEE] text-center font-clash-display text-[18px] leading-[28px] lg:text-[24px] lg:leading-[32px]">Mitarbeiter</span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <p className="text-[#ffffff] font-clash-display text-[64px] font-medium leading-[64px] 2xl:text-[120px] 2xl:leading-[134px]">9</p>
                        <span className="text-[#E8EAEE] text-center font-clash-display text-[18px] leading-[28px] lg:text-[24px] lg:leading-[32px]">Standorte bundesweit</span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <p className="text-[#ffffff] font-clash-display text-[64px] font-medium leading-[64px] 2xl:text-[120px] 2xl:leading-[134px]">{">250"}</p>
                        <span className="text-[#E8EAEE] text-center font-clash-display text-[18px] leading-[28px] lg:text-[24px] lg:leading-[32px]">erfolgreich abgeschlossene Projekte</span>
                    </div>
                </div>
            </InfoCard>
        </Main>
    )
};

export default Home;
