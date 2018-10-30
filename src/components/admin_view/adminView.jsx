import React from 'react';
import { Accordion, Icon, ChooseButton, ContextMenu } from 'chayns-components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles.scss';


export default class ExternViewAccordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 0,
            contextMenu: false
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <Accordion
                head={
                    <div>
                        <span
                            className={'border'}
                            contentEditable={'true'}
                        >Team
                        </span>
                    </div>}
                defaultOpened
                onSearch={console.log}
                searchPlaceholder={'Suche'}
                // ref={(elem) => {
                //     this.pos = elem;
                //     console.log(this.state.contextMenu);
                // }}
                right={
                    <ContextMenu
                        coordinates={{ x: 440, y: 200 }}
                        hide={this.state.contextMenu}
                        items={[{
                            icon: 'ts-tobit',
                            onClick: console.log('hi'),
                            text: 'Extern anzeigen'
                        }]}
                        onLayerClick={() =>
                            this.setState({ contextMenu: !this.state.contextMenu })
                        }
                    />
                }
            >
                <Accordion
                    head={
                        <span
                            className={'border'} 
                            contentEditable={'true'}
                        >Vorstand
                        </span>}
                    right={
                        <div
                            className="cmIconWrapper"
                        >
                            <i
                                className="ts-ellipsis_v cmAccordion"
                                onClick={() => {
                                    this.setState({contextMenu: !this.state.contextMenu})
                                }}
                                style={{ position: 'relative' }}
                            />
                        </div>
                        }
                >
                    <div
                        className="icon__accordion dark"
                    >
                        <tbody>
                            <tr>
                                <div
                                    className="icon__accordion__head"
                                >
                                    <td>
                                        <div
                                            className={this.state.open === 1 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            tab-index="1"
                                            onClick={() => {
                                                if (this.state.open != 1)
                                                    this.setState({ open: 1 })
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/702-70831?size=1000")` }}
                                            />
                                            <div
                                                className="title chayns__color--100"
                                            >Tobias
                                </div>
                                            <p
                                                style={{ fontSize: '12px' }}
                                            >CEO
                                </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                            className={this.state.open === 2 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            tab-index="2"
                                            onClick={() => {
                                                if (this.state.open != 2)
                                                    this.setState({ open: 2 })
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/702-80148?size=1000")` }}></div>
                                            <div
                                                className="title chayns__color--100"
                                            >Klaus
                                </div>
                                            <p
                                                style={{ fontSize: '12px' }}
                                            >CFO
                                </p>
                                        </div>
                                    </td>
                                </div>
                            </tr>
                        </tbody>
                        <div
                            className="icon__accordion__body chayns__color--100"
                        >
                            <div
                                className="content_wrapper"
                            >
                                <div
                                    className={this.state.open === 1 ? "icon__accordion__content show" : "icon__accordion__content"}
                                    tab-content-index="1"
                                >
                                    <div className={this.state.open === 1 ? "" : "hide"} style={{ padding: '10px' }}>
                                        <p className={'border'}>
                                            Wer in den 1980ern ein Software-Unternehmen gegründet hat, der ist heute entweder Privatier oder Pleitier. Kein Mensch hält es in der wohl schnellsten Branche der Welt so lange auf dem Chefsessel aus. Dass Tobias Groten als CEO noch immer das Unternehmen leitet, das er 1986 alleine gegründet hat, liegt aber nicht daran, dass er auch heute noch auf einem Holzstuhl sitzt. Sondern an seinem nicht enden wollenden Drang, einfach alle und alles zu vernetzen. Als „Arbeit“ hat er das allerdings nie verstanden.
                                    </p>
                                        <Icon className="socialImage active" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                        <img className="socialImage" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/86f3e9e7-b912-41de-bd5b-f12073cb8753.jpg`}></img>
                                        <img className="socialImage active" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                        <img className="socialImage" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                        <img className="socialImage" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/b4ce5348-fe9f-40fb-a309-ff9f173d1665.jpg`}></img>
                                        <img className="socialImage active" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/3d798f31-283e-4511-8bf6-060bb83bd293.jpg`}></img>
                                        <img className="socialImage" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/9ad7b936-9b67-44e9-8489-c68a9f2fe55b.jpg`}></img>
                                    </div>
                                </div>
                                <div
                                    className={this.state.open === 2 ? "icon__accordion__content show" : "icon__accordion__content"}
                                    tab-content-index="2"
                                >
                                    <div className={this.state.open === 2 ? "" : "hide"} style={{ padding: '10px' }}>
                                        <p>
                                            Beim Chief Financial Officer oder auch Finanzvorstand laufen alle Zahlen zusammen. Er ist für die betriebswirtschaftlichen Prozesse im Unternehmen verantwortlich. Er fasst die Zahlen des Unternehmens zu Monats- und Jahresabschlüssen zusammen und lenkt die Weiterentwicklung des Unternehmens aus der finanziellen Perspektive.
                                        </p>
                                        <Icon className="socialImage" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                        <img className="socialImage" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                        <img className="socialImage" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Accordion>


                <Accordion
                    head={
                        <span
                            className={'border'} 
                            contentEditable="true"
                        >Stab
                        </span>}
                    right={
                        <div
                            className="cmIconWrapper"
                        >
                            <i
                                className="ts-ellipsis_v cmAccordion"
                                style={{ position: 'relative' }}
                            />
                        </div>
                        }
                >
                    <div
                        className="icon__accordion dark"
                    >
                        <tbody>
                            <tr>
                                <div
                                    className="icon__accordion__head"
                                >
                                    <td>
                                        <div
                                            className={this.state.open === 3 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            tab-index="3"
                                            onClick={() => {
                                                if (this.state.open != 3)
                                                    this.setState({ open: 3 })
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/666-98961?size=1000")` }}
                                            />
                                            <div className="title chayns__color--100">Dieter</div>
                                            <p style={{ fontSize: '12px' }}>Marcom</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                            className={this.state.open === 4 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            tab-index="4"
                                            onClick={() => {
                                                if (this.state.open != 4)
                                                    this.setState({ open: 4 })
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/126-45509?size=1000")` }}
                                            />
                                            <div className="title chayns__color--100">Kirsten</div>
                                            <p style={{ fontSize: '12px' }}>Business Development</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                            className={this.state.open === 5 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            tab-index="5"
                                            onClick={() => {
                                                if (this.state.open != 5)
                                                    this.setState({ open: 5 })
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/666-48650?size=1000")` }}></div>
                                            <div
                                                className="title chayns__color--100"
                                            >Rudi
                                            </div>
                                            <p style={{ fontSize: '12px' }}>Real Estate</p>
                                        </div>
                                    </td>
                                </div>
                            </tr>
                        </tbody>
                        <div className="icon__accordion__body chayns__color--100">
                            <div className="content_wrapper">
                                <div
                                    className={this.state.open === 3 ? "icon__accordion__content show" : "icon__accordion__content"}
                                    tab-content-index="3"
                                >
                                 <div className={this.state.open === 3 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Marketing Communication ist die Verbindung nach draußen zu den Menschen. Dieter ist unterwegs um ein stetig wachsendes Publikum von einer Technologie zu begeistern und die neuen Entwicklungen aus dem Unternehmen über unterschiedliche Kanäle zu verbreiten.
                                    </p>
                                    <Icon className="socialImage" alt={"rip"} icon="ts-message" style={{ fontSize: '30px', marginRight: '5px' }} />
                                    <img className="socialImage" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                    <img className="socialImage" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                </div>
                                </div>
                                <div
                                    className={this.state.open === 4 ? "icon__accordion__content show" : "icon__accordion__content"}
                                    tab-content-index="4"
                                >
                                 <div className={this.state.open === 4 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Wie entwickelt sich das Unternehmen weiter? In welche Richtung wird die zukünfitge Arbeit ausgerichtet? Welche Projekte werden in Angriff genommen? Es sind die großen strategischen Fragen, die normalerweise an dieser Stelle beantwortet werden. Wo liegen mögliche Absatzmärkte, welche Kunden kann man ansprechen und welchen Erfolg verspricht dieses oder jenes Geschäftsmodell?
                                    </p>
                                        <Icon className="socialImage" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                        <img className="socialImage" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                        <img className="socialImage" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                </div>
                                </div>
                                <div
                                    className={this.state.open === 5 ? "icon__accordion__content show" : "icon__accordion__content"}
                                    tab-content-index="5"
                                >
                                 <div className={this.state.open === 5 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Real Estate -- also die Liegenschaftsangelegenheiten eines Unternehmens. Eine staubtrockene Angelegenheit irgendwo im Papierwust zwischen Behördenschreibtischen, Baugenehmigungen, Immobilienmarkt, Brandschutzverordnungen und der Diskussion mit dem Handwerker, ob die Wand nun gerade, der Flansch richtig gesetzt und das Elektrokabel wirklich ausgerechnet da verlegt werden muss.
                                    </p>
                                    <Icon className="socialImage" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                        <img className="socialImage" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                        <img className="socialImage" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                </div>
                                </div>
                            </div>
                        </div>
                        <tbody>
                            <tr>
                                <div
                                    className="icon__accordion__head"
                                >
                                    <td>
                                        <div
                                            className={this.state.open === 6 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            tab-index="6"
                                            onClick={() => {
                                                if (this.state.open != 6)
                                                    this.setState({ open: 6 })
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub52.tobit.com/121/121-58660_f1000.jpg")` }}
                                            />
                                            <div className="title chayns__color--100">Melanie</div>
                                            <p style={{ fontSize: '12px' }}>Talent Scouting</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                            className={this.state.open === 7 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            tab-index="7"
                                            onClick={() => {
                                                if (this.state.open != 7)
                                                    this.setState({ open: 7 })
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/669-96279?size=1000")` }}
                                            />
                                            <div className="title chayns__color--100">Jessi</div>
                                            <p style={{ fontSize: '12px' }}>Showcases Supervision</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                            className={this.state.open === 8 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            tab-index="8"
                                            onClick={() => {
                                                if (this.state.open != 8)
                                                    this.setState({ open: 8 })
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/123-77247?size=1000")` }}
                                            />
                                            <div
                                                className="title chayns__color--100"
                                            >Alexander
                                            </div>
                                            <p style={{ fontSize: '12px' }}>Legal Affairs</p>
                                        </div>
                                    </td>
                                </div>
                            </tr>
                        </tbody>
                        <div className="icon__accordion__body chayns__color--100">
                            <div className="content_wrapper">
                                <div
                                    className={this.state.open === 6 ? 'icon__accordion__content show' : 'icon__accordion__content'}
                                    tab-content-index="6"
                                >
                                 <div className={this.state.open === 6 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Marketing Communication ist die Verbindung nach draußen zu den Menschen. Dieter ist unterwegs um ein stetig wachsendes Publikum von einer Technologie zu begeistern und die neuen Entwicklungen aus dem Unternehmen über unterschiedliche Kanäle zu verbreiten.
                                    </p>
                                    </div>
                                </div>
                                <div
                                    className={this.state.open === 7 ? 'icon__accordion__content show' : 'icon__accordion__content'}
                                    tab-content-index="7"
                                >
                                 <div className={this.state.open === 7 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Wie entwickelt sich das Unternehmen weiter? In welche Richtung wird die zukünfitge Arbeit ausgerichtet? Welche Projekte werden in Angriff genommen? Es sind die großen strategischen Fragen, die normalerweise an dieser Stelle beantwortet werden. Wo liegen mögliche Absatzmärkte, welche Kunden kann man ansprechen und welchen Erfolg verspricht dieses oder jenes Geschäftsmodell?
                                    </p>
                                    </div>
                                </div>
                                <div
                                    className={this.state.open === 8 ? 'icon__accordion__content show' : 'icon__accordion__content'}
                                    tab-content-index="8"
                                >
                                 <div className={this.state.open === 8 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Real Estate -- also die Liegenschaftsangelegenheiten eines Unternehmens. Eine staubtrockene Angelegenheit irgendwo im Papierwust zwischen Behördenschreibtischen, Baugenehmigungen, Immobilienmarkt, Brandschutzverordnungen und der Diskussion mit dem Handwerker, ob die Wand nun gerade, der Flansch richtig gesetzt und das Elektrokabel wirklich ausgerechnet da verlegt werden muss.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Accordion>


                <Accordion
                    head={
                        <span
                            className={'border'} 
                            contentEditable="true"
                        >Tobit.Labs
                        </span>}
                    right={
                        <div
                            className="cmIconWrapper"
                        >
                            <i
                                className="ts-ellipsis_v cmAccordion"
                                style={{ position: 'relative' }}
                            />
                        </div>
                    }
                >
                    <div
                        className="icon__accordion dark"
                    >
                        <tbody>
                            <tr>
                                <div
                                    className="icon__accordion__head"
                                >
                                    <td>
                                        <div
                                            className={this.state.open === 9 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            tab-index="9"
                                            onClick={() => {
                                                if (this.state.open != 9)
                                                    this.setState({ open: 9 })
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/670-46841?size=1000")` }}
                                            />
                                            <div className="title chayns__color--100">Roman</div>
                                            <p style={{ fontSize: '12px' }}>Abteilungsleiter</p>
                                        </div>
                                    </td>
                                </div>
                            </tr>
                        </tbody>
                        <div className="icon__accordion__body chayns__color--100">
                            <div className="content_wrapper">
                                <div
                                    className={this.state.open === 9 ? "icon__accordion__content show" : "icon__accordion__content"}
                                    tab-content-index="9"
                                >
                                 <div className={this.state.open === 9 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Marketing Communication ist die Verbindung nach draußen zu den Menschen. Dieter ist unterwegs um ein stetig wachsendes Publikum von einer Technologie zu begeistern und die neuen Entwicklungen aus dem Unternehmen über unterschiedliche Kanäle zu verbreiten.
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Accordion
                    head={"Engineering"}
                    >
                    <div
                        className="icon__accordion dark"
                    >
                        <tbody>
                            <tr>
                                <div
                                    className="icon__accordion__head"
                                >
                                    <td>
                                        <div
                                            className={this.state.open === 10 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            tab-index="10"
                                            onClick={() => {
                                                if (this.state.open != 10)
                                                    this.setState({ open: 10 })
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/115-72453?size=1000")` }}
                                            />
                                            <div className="title chayns__color--100">Corinna</div>
                                            <p style={{ fontSize: '12px' }}>Ausbildung</p>
                                        </div>
                                    </td>

                                    <td>
                                        <div
                                            className={this.state.open === 11 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            tab-index="11"
                                            onClick={() => {
                                                if (this.state.open != 11)
                                                    this.setState({ open: 11 })
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/127-88404?size=1000")` }}
                                            />
                                            <div className="title chayns__color--100">Fabiano</div>
                                            <p style={{ fontSize: '12px' }}>Ausbildung</p>
                                        </div>
                                    </td>
                                </div>
                            </tr>
                        </tbody>
                        <div className="icon__accordion__body chayns__color--100">
                            <div className="content_wrapper">
                                <div
                                    className={this.state.open === 10 ? "icon__accordion__content show" : "icon__accordion__content"}
                                    tab-content-index="10"
                                >
                                 <div className={this.state.open === 10 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Marketing Communication ist die Verbindung nach draußen zu den Menschen. Dieter ist unterwegs um ein stetig wachsendes Publikum von einer Technologie zu begeistern und die neuen Entwicklungen aus dem Unternehmen über unterschiedliche Kanäle zu verbreiten.
                                    </p>
                                </div>
                                </div>
                                <div
                                    className={this.state.open === 11 ? "icon__accordion__content show" : "icon__accordion__content"}
                                    tab-content-index="11"
                                >
                                 <div className={this.state.open === 11 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Marketing Communication ist die Verbindung nach draußen zu den Menschen. Dieter ist unterwegs um ein stetig wachsendes Publikum von einer Technologie zu begeistern und die neuen Entwicklungen aus dem Unternehmen über unterschiedliche Kanäle zu verbreiten.
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Accordion>

                <Accordion
                    head={"Infrastructure"}
                >
                    <div
                        className="icon__accordion dark"
                    >
                        <tbody>
                            <tr>
                                <div
                                    className="icon__accordion__head"
                                >
                                    <td>
                                        <div
                                            className={this.state.open === 12 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            tab-index="12"
                                            onClick={() => {
                                                if (this.state.open != 12)
                                                    this.setState({ open: 12 })
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/666-88915?size=1000")` }}
                                            />
                                            <div className="title chayns__color--100">Dominik</div>
                                            <p style={{ fontSize: '12px' }}>?</p>
                                        </div>
                                    </td>

                                    <td>
                                        <div
                                            className={this.state.open === 13 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            tab-index="13"
                                            onClick={() => {
                                                if (this.state.open != 13)
                                                    this.setState({ open: 13 })
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/124-27212?size=1000")` }}
                                            />
                                            <div className="title chayns__color--100">Marco</div>
                                            <p style={{ fontSize: '12px' }}>?</p>
                                        </div>
                                    </td>
                                </div>
                            </tr>
                        </tbody>
                        <div className="icon__accordion__body chayns__color--100">
                            <div className="content_wrapper">
                                <div
                                    className={this.state.open === 12 ? "icon__accordion__content show" : "icon__accordion__content"}
                                    tab-content-index="12"
                                >
                                <div className={this.state.open === 12 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Marketing Communication ist die Verbindung nach draußen zu den Menschen. Dieter ist unterwegs um ein stetig wachsendes Publikum von einer Technologie zu begeistern und die neuen Entwicklungen aus dem Unternehmen über unterschiedliche Kanäle zu verbreiten.
                                    </p>
                                </div>
                                </div>
                                <div
                                    className={this.state.open === 13 ? "icon__accordion__content show" : "icon__accordion__content"}
                                    tab-content-index="13"
                                >
                                <div className={this.state.open === 13 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Marketing Communication ist die Verbindung nach draußen zu den Menschen. Dieter ist unterwegs um ein stetig wachsendes Publikum von einer Technologie zu begeistern und die neuen Entwicklungen aus dem Unternehmen über unterschiedliche Kanäle zu verbreiten.
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Accordion>

                </Accordion>
                <Accordion
                    className={'addUac'}
                    head={'Gruppen hinzufügen'}
                    icon={faPlus}
                    defaultOpened
                >
                    <div
                        className={'accordion__content addGroup'}>
                            <div
                                className={'addGroup'}>
                                <p>Wähle Uac Gruppen aus um diese <br/> mit all ihren Mitgliedern anzuzeigen.</p>
                            </div>
                        <ChooseButton
                            className="flex"
                        >
                            Gruppen auswählen
                        </ChooseButton>
                    </div>
                </Accordion>

            </Accordion>
        );
    }
}
