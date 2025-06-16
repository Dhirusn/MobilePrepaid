import ChargingOptions from "../components/ChargingOptions";
import { useNavigate, useParams } from "react-router-dom";

const Packages = () => {
    const { pkg } = useParams();
    const navigate = useNavigate();
    const scrollToTop = (route: string) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        navigate(`/operators/${route}`)
    };

    return (
        <>
            <div className="bg-[#5300ef] h-[30vh] w-full mt-16">
                <div className="w-full md:w-[70%] m-auto ">
                    <h2 className="text-4xl font-bold text-white">Packages</h2>
                </div>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md space-y-6 w-full md:w-[70%] m-auto relative bottom-20 md:bottom-42">
                {
                    pkg === "Telekom" && (
                        <div>
                            <h1 className="text-3xl font-bold">
                                Reîncărcare directă pentru cartela Telekom
                            </h1>
                            <p className="mt-4 text-gray-600">
                                Grație sistemului de reîncărcare Telekom electronică a cartelelor PrePay veți avea acces,
                                prin intermediul operatorului, la 3 pachete:
                            </p>
                            <ul className="list-disc">
                                <li>
                                    Reîncărcare cartela Telekom Direct fără cod Pin
                                </li>
                                <li>
                                    Reîncărcare Telekom Credit
                                </li>
                                <li>
                                    Reîncărcare Telekom cu minute cu cod PIN
                                </li>
                            </ul>
                            <p className="mt-4 text-gray-600">
                                Beneficiați de opțiunea de reîncărcare Telekom online prin urmarea unor pași simpli și puteți reactualiza
                                creditul telefonului în doar câteva minute. Încărcarea cartelei Telekom se poate face cu valoarea necesară,
                                de la 6 la 200 €. Indiferent de tipul cartelei, fie ea Frog, Vibe, MTV Mobile sau Internet veți putea reîncărca
                                sau activa SIM-ul în doar câțiva pași simpli.
                            </p>
                            <p className="mt-4 text-gray-600">
                                Descoperiți câteva dintre opțiunile puse la dispoziție:
                            </p>
                            <div className="grid md:grid-cols-3 grid-cols-1 mt-2  text-gray-600">
                                <div>
                                    <h1 className="font-semibold text-lg">
                                        Opțiunea Extra Date M cu 5.95 € credit:
                                    </h1>
                                    <ul className="list-disc">
                                        <li>
                                            Bonus Extra Voce M, gratis pe o cartelă nouă Telekom
                                        </li>
                                        <li>
                                            1000 MB la viteză 4G (din care 500 bonus)
                                        </li>
                                        <li>
                                            100 minute internaționale către mobil bonus
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-lg">
                                        Opțiunea Extra Voce M cu 5.95 € credit:
                                    </h1>
                                    <ul className="list-disc">
                                        <li>
                                            Bonus Extra Voce M, gratis pe o cartelă nouă Telekom
                                        </li>
                                        <li>
                                            1000 minute naționale și fix internaționale/SMS-uri naționale (din care 500 bonus)
                                        </li>
                                        <li>
                                            100 minute internaționale către mobil bonus
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-lg">
                                        Opțiunea Extra S cu 4.95 € credit:
                                    </h1>
                                    <ul className="list-disc">
                                        <li>
                                            NELIMITAT minute și SMS-uri în rețelele fixe și mobile Telekom Romania
                                        </li>
                                        <li>
                                            200 minute naționale și fix internaționale/SMS-uri naționale (din care 100 Bonus)
                                        </li>
                                        <li>
                                            100 MB trafic de internet (din care 50 MB Bonus)
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-lg">
                                        Opțiunea Extra L cu 6.95 € credit:
                                    </h1>
                                    <ul className="list-disc">
                                        <li>
                                            Bonus Extra Voce M, gratis pe o cartelă nouă Telekom
                                        </li>
                                        <li>
                                            1000 minute naționale și fix internaționale/SMS-uri naționale (din care 500 bonus)
                                        </li>
                                        <li>
                                            100 minute internaționale către mobil bonus
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-lg">
                                        Opțiunea Extra XL cu 9.95 € credit:
                                    </h1>
                                    <ul className="list-disc">
                                        <li>
                                            Bonus Extra Voce M, gratis pe o cartelă nouă Telekom
                                        </li>
                                        <li>
                                            1500 minute naționale și fix internaționale/SMS-uri naționale (din care 500 bonus)
                                        </li>
                                        <li>
                                            100 minute internaționale către mobil bonus
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-lg">
                                        Extraopțiunea MTV 7x cu 5.00 € credit:
                                    </h1>
                                    <ul className="list-disc">
                                        <li>
                                            Bonus la alegere: 120 minute naționale/internaționale fix/SMS-uri naționale sau 350 MB trafic de date
                                        </li>
                                        <li>
                                            Bonus MTV7x, gratis pe o cartelă nouă MTV Mobile
                                        </li>
                                        <li>
                                            NELIMITAT minute/SMS-uri în rețelele MTV Mobile și Telekom Romania
                                        </li>
                                        <li>
                                            120 minute naționale/internaționale către fix/SMS-uri naționale
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    )
                }
                {
                    pkg === "Vodafone" && (
                        <div>
                            <h1 className="text-3xl font-bold">
                                Reîncarcare directă pentru cartela Vodafone
                            </h1>
                            <p className="mt-4 text-gray-600">
                                În cazul reîncărcării Vodafone vei beneficia de ocazia de a-ți personaliza opțiunile în funcție
                                de nevoile tale de comunicare. Site-ul cartela.info îți pune la dispoziție o gamă variată de produse,
                                perfect pentru nevoile tale dacă deții deja o cartelă Vodafone cu credit inițial de 0,1 sau 5 € și
                                dorești o reîncărcare la cartela Vodafone. Prin procedeul de reîncărcare Vodafone online vei parcurge
                                câțiva pași simpli și poți afla oricând creditul actual prin serviciul direct - creditul se actualizează
                                direct pe telefon.
                            </p>
                            <p className="mt-4 text-gray-600">
                                Dacă ești client de până la 3 ani și reîncarci creditul cu cel puțin 5 euro, te poți bucura de 30 de minute
                                și SMS-uri naționale prin programul „Vodafone pentru Tine la Cartelă”. Te poți înscrie foarte simplu și gratuit
                                cu un SMS cu textul DA la 2789 și bonusul este al tău. Bonusul se consumă cu prioritate față de creditul existent
                                de pe cartelă sau alte extraopțiuni, se acordă o singură dată pe lună și este valabil 30 de zile.
                            </p>
                            <p className="mt-4 text-gray-600">
                                Încărcare cartelei Vodafone asigură toate opțiunile plătite, dar și fidelizare cu bonusuri în minute și SMS-uri, în
                                funcție de vechimea cartelei PrePay, dar și de valoare reîncărcată. Încarcă-ți cartela Vodafone, în SupernetTM 4G și
                                primești până la 3300 de „ce vrei tu”, adică minute naționale/MB/SMS-uri naționale – în orice combinație, cum vrei tu.
                                În plus, ai 12 luni de muzică nelimitată cu aplicația Zonga.
                            </p>
                        </div>
                    )
                }
                {
                    pkg === "Orange" && (
                        <div className="">
                            <h1 className="text-3xl font-bold">
                                Reîncărcare directă pentru cartela Orange
                            </h1>
                            <p className="mt-4 text-gray-600">
                                Există două opțiuni pentru o reîncărcare Orange pe site-ul cartela.info:
                                fie aveți deja o cartelă Prepay și doriți reîncărcarea creditului Orange,
                                fie aveți Free Sim și doriți să îl activați cu ajutorul site-ului. Pentru
                                orice reîncărcare cartelă Orange puteți alege dintre următoarele variante de opțiuni,
                                mai exact credit, minute sau trafic de internet. Reîncărcarea Orange online se va realiza
                                prin încărcare directă și presupune valori cuprinse între 5 și 200 €.
                            </p>
                            <p className="mt-4 text-gray-600">
                                Luați în considerare și faptul că, în cazul unei reîncărcări online Orange,
                                pentru opțiunile cu minute este necesară apelarea unui număr prestabilit pentru
                                activare. În cazul în care doriți opțiunea cu internet, site-ul nostru vă pune la
                                dispoziție valori de reîncărcare cuprinse între 5 și 13 €, fiecare cu propriul pachet.
                                În cazul în care v-ați achiziționat o cartelă PrePay și doriți o încărcare Orange PrePay,
                                țineți minte faptul că în rețeaua Orange veți beneficia de 2000 de minute sau SMS-uri, plus 100
                                de minute în alte rețele și trafic de internet de 50 MB.
                            </p>
                            <div className="grid md:grid-cols-3 grid-cols-1 mt-2  text-gray-600">
                                <div>
                                    <h1 className="font-semibold text-lg">
                                        Minute cu 6 € credit:
                                    </h1>
                                    <ul className="list-disc">
                                        <li>
                                            3000 min în rețea
                                        </li>
                                        <li>
                                            Nelimitat: SMS în rețea
                                        </li>
                                        <li>
                                            125 de min naționale și internaționale către fix sau SMS naționale din
                                            care 50 min sau SMS-uri internaționale pe mobil
                                        </li>
                                        <li>
                                            200 MB trafic de internet
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-lg">
                                        Minute cu 8 € credit:
                                    </h1>
                                    <ul className="list-disc">
                                        <li>
                                            Nelimitat: minute în rețea
                                        </li>
                                        <li>
                                            Nelimitat: SMS naționale
                                        </li>
                                        <li>
                                            175 de min naționale și internaționale către fix/ mobil sau SMS-uri internaționale
                                        </li>
                                        <li>
                                            400 MB trafic de internet
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-lg">
                                        Minute cu 10 € credit:
                                    </h1>
                                    <ul className="list-disc">
                                        <li>
                                            Nelimitat: minute în rețea
                                        </li>
                                        <li>
                                            Nelimitat SMS naționale
                                        </li>
                                        <li>
                                            200 de minute naționale și internaționale către fix/ mobil sau SMS-uri internaționale
                                        </li>
                                        <li>
                                            800 MB trafic de internet
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-lg">
                                        Minute cu 12 € credit:
                                    </h1>
                                    <ul className="list-disc">
                                        <li>
                                            Nelimitat: min în rețea
                                        </li>
                                        <li>
                                            Nelimitat: SMS naționale
                                        </li>
                                        <li>
                                            200 de min naționale și internaționale către fix/ mobil sau SMS-uri internaționale
                                        </li>
                                        <li>
                                            1 GB trafic de internet
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600">
                                Înainte de a începe să vă consumați creditul, dacă vă petreceți mai mult timp navigând pe internet,
                                vă puteți transfera creditul între altă opțiune. De exemplu: trafic de internet, printr-un SMS gratuit
                                la 321 cu textul DATA. SIM-urile sunt compatibile cu laptopurile, tabletele sau smartphone-uri diverse.
                            </p>
                            <p className="mt-4 text-gray-600">
                                Orange s-a făcut remarcat și a câștigat cotă de piață prin acoperirea foarte bună și servicii de calitate.
                                Cu Orange Youth, operatorul pune la dispoziția celor mai tineri clienți un produs prepaid ce se poate personaliza
                                pentru prima oară, astfel încât clientul își poate ajusta combinația de minute, SMS-uri și trafic de internet în
                                funcție de necesități. Fă acum o reîncărcare cartela Orange cu cardul!
                            </p>
                        </div>
                    )
                }
            </div>

            {
                pkg === "Telekom" && (

                    <ChargingOptions
                        title={pkg!}
                        titleTextColor="text-pink-600"
                        itemTextColor="text-pink-600"
                        itemTextHoverColor="group-hover:text-white"
                        midTextColor="text-pink-500"
                        mainBorderColorValue="border-red-700"
                        midBorderColorValue="border-red-700"
                        bgColorValue="hover:bg-red-500"
                        scrollToTop={() => scrollToTop("Telekom")}
                    />
                )
            }
            {
                pkg === "Orange" && (
                    <ChargingOptions
                        title={pkg!}
                        titleTextColor="text-orange-600"
                        itemTextColor="text-orange-600"
                        itemTextHoverColor="group-hover:text-white"
                        midTextColor="text-orange-500"
                        mainBorderColorValue="border-orange-700"
                        midBorderColorValue="border-orange-700"
                        bgColorValue="hover:bg-orange-500"
                        scrollToTop={() => scrollToTop("Orange")}
                    />
                )
            }

            {
                pkg === "Vodafone" && (
                    <ChargingOptions
                        title={pkg!}
                        titleTextColor="text-red-600"
                        itemTextColor="text-red-600"
                        itemTextHoverColor="group-hover:text-white"
                        midTextColor="text-red-500"
                        mainBorderColorValue="border-red-700"
                        midBorderColorValue="border-red-700"
                        bgColorValue="hover:bg-red-600"
                        scrollToTop={() => scrollToTop("Vodafone")}
                    />
                )
            }
        </>
    )
}

export default Packages