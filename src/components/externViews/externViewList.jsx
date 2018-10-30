import React from 'react';
import { Icon } from 'chayns-components';
import '../styles.scss';

export default class ExternViewAccordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 0,
            complex: 0
        };
    }
    render() {
        return (
            <div>
                <h2 style={{ paddingLeft: '12px' }}>Vorstand</h2>
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
                                            onClick={() => {
                                                if (this.state.open != 1)
                                                this.setState({ 
                                                    open: 1,
                                                    complex:0 
                                                });
                                                else {
                                                    console.log(this.state.complex);
                                                    
                                                    this.setState({ open: 0 });
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/702-70831?size=112")`}}
                                            />
                                            <div
                                                className="title chayns__color--100"
                                            >Tobias
                                            </div>
                                            <p
                                                className={'position'}
                                                style={{ fontSize: '12px' }}
                                            >CEO
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                            className={this.state.open === 2 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                            onClick={() => {
                                                if (this.state.open != 2)
                                                this.setState({ 
                                                    open: 2,
                                                    complex:0 
                                                });
                                                else {
                                                    this.setState({ open: 0 })
                                                }
                                            }}
                                        >
                                            <div
                                                className="icon chayns__color--100"
                                                style={{ backgroundImage: `url("https://sub60.tobit.com/u/702-80148?size=112")`}}></div>
                                            <div
                                                className="title chayns__color--100"
                                            >Klaus
                                            </div>
                                            <p
                                                className={'position'}
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
                                >
                                    <div className={this.state.open === 1 ? "" : "hide"} style={{ padding: '10px' }}>
                                        <p>
                                            Wer in den 1980ern ein Software-Unternehmen gegründet hat, der ist heute entweder Privatier oder Pleitier. Kein Mensch hält es in der wohl schnellsten Branche der Welt so lange auf dem Chefsessel aus. Dass Tobias Groten als CEO noch immer das Unternehmen leitet, das er 1986 alleine gegründet hat, liegt aber nicht daran, dass er auch heute noch auf einem Holzstuhl sitzt. Sondern an seinem nicht enden wollenden Drang, einfach alle und alles zu vernetzen. Als „Arbeit“ hat er das allerdings nie verstanden.
                                        </p>
                                        <Icon className="socialImage active" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                        <img className="socialImage active" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                        <img className="socialImage active" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                        <img className="socialImage active" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/86f3e9e7-b912-41de-bd5b-f12073cb8753.jpg`}></img>
                                        <img className="socialImage active" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/b4ce5348-fe9f-40fb-a309-ff9f173d1665.jpg`}></img>
                                        <img className="socialImage active" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/3d798f31-283e-4511-8bf6-060bb83bd293.jpg`}></img>
                                        <img className="socialImage active" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/9ad7b936-9b67-44e9-8489-c68a9f2fe55b.jpg`}></img>
                                    </div>
                                </div>
                                <div
                                    className={this.state.open === 2 ? "icon__accordion__content show" : "icon__accordion__content"}
                                >
                                    <div className={this.state.open === 2 ? "" : "hide"} style={{ padding: '10px' }}>
                                        <p>
                                            Beim Chief Financial Officer oder auch Finanzvorstand laufen alle Zahlen zusammen. Er ist für die betriebswirtschaftlichen Prozesse im Unternehmen verantwortlich. Er fasst die Zahlen des Unternehmens zu Monats- und Jahresabschlüssen zusammen und lenkt die Weiterentwicklung des Unternehmens aus der finanziellen Perspektive.
                                        </p>
                                        <Icon className="socialImage active" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                        <img className="socialImage active" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/86f3e9e7-b912-41de-bd5b-f12073cb8753.jpg`}></img>
                                        <img className="socialImage active" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                        <img className="socialImage active" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                        <img className="socialImage active" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/b4ce5348-fe9f-40fb-a309-ff9f173d1665.jpg`}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <h2 style={{ paddingLeft: '12px', paddingTop: '20px' }}>Stab</h2>
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
                                        onClick={() => {
                                            if (this.state.open != 3)
                                            this.setState({ 
                                                open: 3,
                                                complex:0 
                                            });
                                            else {
                                                this.setState({ open: 0 })
                                            }
                                        }}
                                    >
                                        <div
                                            className="icon chayns__color--100"
                                            style={{ backgroundImage: `url("https://sub60.tobit.com/u/666-98961?size=112")` }}
                                        />
                                        <div className="title chayns__color--100">Dieter</div>
                                        <p
                                            className={'position'}
                                            style={{ fontSize: '12px' }}
                                        >Marcom
                                            </p>
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className={this.state.open === 4 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                        onClick={() => {
                                            if (this.state.open != 4)
                                            this.setState({ 
                                                open: 4,
                                                complex:0 
                                            });
                                            else {
                                                this.setState({ open: 0 })
                                            }
                                        }}
                                    >
                                        <div
                                            className="icon chayns__color--100"
                                            style={{ backgroundImage: `url("https://sub60.tobit.com/u/126-45509?size=112")`}}
                                        />
                                        <div className="title chayns__color--100">Kirsten</div>
                                        <p
                                            className={'position'}
                                            style={{ fontSize: '12px' }}
                                        >Business Development
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className={this.state.open === 5 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                        onClick={() => {
                                            if (this.state.open != 5)
                                            this.setState({ 
                                                open: 5,
                                                complex:0 
                                            });
                                            else {
                                                this.setState({ open: 0 })
                                            }
                                        }}
                                    >
                                        <div
                                            className="icon chayns__color--100"
                                            style={{ backgroundImage: `url("https://sub60.tobit.com/u/666-48650?size=112")`}}></div>
                                        <div
                                            className="title chayns__color--100"
                                        >Rudi
                                        </div>
                                        <p
                                            className={'position'}
                                            style={{ fontSize: '12px' }}
                                        >Real Estate
                                        </p>
                                    </div>
                                </td>
                            </div>
                        </tr>
                    </tbody>
                    <div className="icon__accordion__body chayns__color--100">
                        <div className="content_wrapper">
                            <div
                                className={this.state.open === 3 ? "icon__accordion__content show" : "icon__accordion__content"}
                            >
                                <div className={this.state.open === 3 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Marketing Communication ist die Verbindung nach draußen zu den Menschen. Dieter ist unterwegs um ein stetig wachsendes Publikum von einer Technologie zu begeistern und die neuen Entwicklungen aus dem Unternehmen über unterschiedliche Kanäle zu verbreiten.
                                    </p>
                                    <Icon className="socialImage active" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                    <img className="socialImage active" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/86f3e9e7-b912-41de-bd5b-f12073cb8753.jpg`}></img>
                                    <img className="socialImage active" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                    <img className="socialImage active" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                </div>
                            </div>
                            <div
                                className={this.state.open === 4 ? "icon__accordion__content show" : "icon__accordion__content"}
                            >
                                <div className={this.state.open === 4 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Wie entwickelt sich das Unternehmen weiter? In welche Richtung wird die zukünfitge Arbeit ausgerichtet? Welche Projekte werden in Angriff genommen? Es sind die großen strategischen Fragen, die normalerweise an dieser Stelle beantwortet werden. Wo liegen mögliche Absatzmärkte, welche Kunden kann man ansprechen und welchen Erfolg verspricht dieses oder jenes Geschäftsmodell?
                                    </p>
                                    <Icon className="socialImage active" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                    <img className="socialImage active" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/86f3e9e7-b912-41de-bd5b-f12073cb8753.jpg`}></img>
                                    <img className="socialImage active" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                    <img className="socialImage active" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                </div>
                            </div>
                            <div
                                className={this.state.open === 5 ? "icon__accordion__content show" : "icon__accordion__content"}
                            >
                                <div className={this.state.open === 5 ? "" : "hide"} style={{ padding: '10px' }}>
                                    <p>
                                        Real Estate -- also die Liegenschaftsangelegenheiten eines Unternehmens. Eine staubtrockene Angelegenheit irgendwo im Papierwust zwischen Behördenschreibtischen, Baugenehmigungen, Immobilienmarkt, Brandschutzverordnungen und der Diskussion mit dem Handwerker, ob die Wand nun gerade, der Flansch richtig gesetzt und das Elektrokabel wirklich ausgerechnet da verlegt werden muss.
                                    </p>
                                    <Icon className="socialImage active" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                    <img className="socialImage active" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                    <img className="socialImage active" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
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
                                        <p
                                            className={'position'}
                                            style={{ fontSize: '12px' }}
                                        >Talent Scouting
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className={this.state.open === 7 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
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
                                            style={{ backgroundImage: `url("https://sub60.tobit.com/u/669-96279?size=112")`}}
                                        />
                                        <div className="title chayns__color--100">Jessi</div>
                                        <p
                                            className={'position'}
                                            style={{ fontSize: '12px' }}
                                        >Showcases Supervision
                                            </p>
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className={this.state.open === 8 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
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
                                            style={{ backgroundImage: `url("https://sub60.tobit.com/u/123-77247?size=112")`}}
                                        />
                                        <div
                                            className="title chayns__color--100"
                                        >Alexander
                                            </div>
                                        <p
                                            className={'position'}
                                            style={{ fontSize: '12px' }}
                                        >Legal Affairs
                                            </p>
                                    </div>
                                </td>
                            </div>
                        </tr>
                    </tbody>
                    <div className="icon__accordion__body chayns__color--100">
                        <div className="content_wrapper">
                            <div
                                className={this.state.open === 6 ? 'icon__accordion__content show' : 'icon__accordion__content'}
                            >
                                <div className={this.state.open === 6 ? '' : 'hide'} style={{ padding: '10px' }}>
                                    <p>
                                        Marketing Communication ist die Verbindung nach draußen zu den Menschen. Dieter ist unterwegs um ein stetig wachsendes Publikum von einer Technologie zu begeistern und die neuen Entwicklungen aus dem Unternehmen über unterschiedliche Kanäle zu verbreiten.
                                    </p>
                                    <Icon className="socialImage active" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                    <img className="socialImage active" alt={'rip'} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/86f3e9e7-b912-41de-bd5b-f12073cb8753.jpg`}/>
                                    <img className="socialImage active" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}/>
                                    <img className="socialImage active" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                </div>
                            </div>
                            <div
                                className={this.state.open === 7 ? 'icon__accordion__content show' : 'icon__accordion__content'}
                            >
                                <div className={this.state.open === 7 ? '' : 'hide'} style={{ padding: '10px' }}>
                                    <p>
                                        Wie entwickelt sich das Unternehmen weiter? In welche Richtung wird die zukünfitge Arbeit ausgerichtet? Welche Projekte werden in Angriff genommen? Es sind die großen strategischen Fragen, die normalerweise an dieser Stelle beantwortet werden. Wo liegen mögliche Absatzmärkte, welche Kunden kann man ansprechen und welchen Erfolg verspricht dieses oder jenes Geschäftsmodell?
                                    </p>
                                    <Icon className="socialImage active" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                    <img className="socialImage active" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                    <img className="socialImage active" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                </div>
                            </div>
                            <div
                                className={this.state.open === 8 ? 'icon__accordion__content show' : 'icon__accordion__content'}
                            >
                                <div className={this.state.open === 8 ? '' : 'hide'} style={{ padding: '10px' }}>
                                    <p>
                                        Real Estate -- also die Liegenschaftsangelegenheiten eines Unternehmens. Eine staubtrockene Angelegenheit irgendwo im Papierwust zwischen Behördenschreibtischen, Baugenehmigungen, Immobilienmarkt, Brandschutzverordnungen und der Diskussion mit dem Handwerker, ob die Wand nun gerade, der Flansch richtig gesetzt und das Elektrokabel wirklich ausgerechnet da verlegt werden muss.
                                    </p>
                                    <Icon className="socialImage active" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                    <img className="socialImage active" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/86f3e9e7-b912-41de-bd5b-f12073cb8753.jpg`}></img>
                                    <img className="socialImage active" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                    <img className="socialImage active" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <tbody>
                        <tr>
                        <h2 style={{ paddingLeft: '12px', paddingTop: '20px' }}>Marketing</h2>
                            <div
                                className="icon__accordion__head"
                            >
                                <td>
                                    <div
                                        className={this.state.open === 9 && this.state.complex === 1 || this.state.complex === 2 || this.state.complex === 3 ? "tab chayns__background-color--0 complexActive" : this.state.open === 9 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                        onClick={() => {
                                            if (this.state.open != 9)
                                                this.setState({ open: 9, notActive: true })
                                            else {
                                                this.setState({ open: 0 })
                                            }
                                        }}
                                    >

                                    <div className="image__grid__container">
                                        <div className="image__main" style={{ background: `url(https://sub60.tobit.com/u/669-85323?size=112)`, backgroundPositionX: '-25px', backgroundSize: '120px' }}/>
                                        <div className="image__top__right" style={{ background: `url(https://sub60.tobit.com/u/132-10439?size=112)`, backgroundPositionX: '-20px', backgroundSize: '100px' }}/>
                                        <div className="image__bottom_right" style={{ background: `url(https://sub60.tobit.com/u/666-39847?size=200)`, backgroundPositionX: '-90px', backgroundSize: '80px' }}/>
                                    </div>

                                        <div className="title chayns__color--100" style={{ paddingTop: '13px' }}>Event Marketing</div>
                                    </div>
                                </td>
                                {/* <td>
                                    <div
                                        className={this.state.open === 10 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
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
                                            style={{ backgroundImage: `url("https://sub60.tobit.com/u/670-32213?size=112")` }}
                                        />
                                        <div className="title chayns__color--100">Product Marketing</div>
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className={this.state.open === 11 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                        onClick={() => {
                                            if (this.state.open != 11)
                                                this.setState({ open: 11 })
                                            else {
                                                this.setState({
                                                    open: 0,
                                                    complex:0
                                                });
                                            }
                                        }}
                                    >
                                        <div
                                            className="icon chayns__color--100"
                                            style={{ backgroundImage: `url("https://sub60.tobit.com/u/671-00492?size=112")` }}
                                        />
                                        <div className="title chayns__color--100">Creative Team</div>
                                    </div>
                                </td> */}
                            </div>
                        </tr>
                    </tbody>
                    <div className="icon__accordion__body chayns__color--100 interleaved">
                        <div className="content_wrapper">
                            <div
                                className={this.state.open === 9 ? 'icon__accordion__content show' : 'icon__accordion__content'}
                                style={{ background: 'transparent' }}
                            >
                                <div className={this.state.open === 9 ? '' : 'hide'}>
                                    <td>
                                    <div
                                        className="icon__accordion__head"
                                    >
                                            <td>
                                                <div
                                                    className={this.state.complex === 1 | this.state.complex === 0 ? "tab chayns__background-color--0 active" : "tab chayns__background-color--0"}
                                                    onClick={() => {
                                                        if (this.state.complex != 1)
                                                            this.setState({ complex: 1 })
                                                        else {
                                                            this.setState({ complex: 0 })
                                                        }
                                                    }}
                                                >
                                                    <div
                                                        className="icon chayns__color--100"
                                                        style={{ backgroundImage: `url("https://sub60.tobit.com/u/669-85323?size=112")` }}
                                                    />
                                                    <div className="title chayns__color--100">Maria</div>
                                                    <p
                                                        className={'position'}
                                                        style={{ fontSize: '12px' }}
                                                    >Teamleiterin
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div
                                                    className={this.state.complex === 2 | this.state.complex === 0 ? 'tab chayns__background-color--0 active' : 'tab chayns__background-color--0'}
                                                    onClick={() => {
                                                        if (this.state.complex != 2)
                                                            this.setState({ complex: 2 })
                                                        else {
                                                            this.setState({ complex: 0 })
                                                        }
                                                    }}
                                                >
                                                    <div
                                                        className="icon chayns__color--100"
                                                        style={{ backgroundImage: `url("https://sub60.tobit.com/u/132-10439?size=112")` }}
                                                    />
                                                    <div className="title chayns__color--100">Romy</div>
                                                    <p
                                                        className={'position'}
                                                        style={{ fontSize: '12px' }}
                                                    >Beschreibung
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div
                                                    className={this.state.complex === 3 | this.state.complex === 0 ? 'tab chayns__background-color--0 active' : 'tab chayns__background-color--0'}
                                                    onClick={() => {
                                                        if (this.state.complex != 3)
                                                            this.setState({ complex: 3 })
                                                        else {
                                                            this.setState({ complex: 0 })
                                                        }
                                                    }}
                                                >
                                                    <div
                                                        className="icon chayns__color--100"
                                                        style={{ backgroundImage: `url('https://sub60.tobit.com/u/666-39847?size=200')` }}
                                                    />
                                                    <div className="title chayns__color--100">Charlotte</div>
                                                    <p
                                                        className={'position'}
                                                        style={{ fontSize: '12px' }}
                                                    >Beschreibung
                                                    </p>
                                                </div>
                                            </td>
                                    </div>
                                        <div className="icon__accordion__body chayns__color--100">
                                            <div className="content_wrapper">
                                                <div
                                                    className={this.state.complex === 1 ? 'icon__accordion__content trans show' : 'icon__accordion__content trans'}
                                                >
                                                    <div className={this.state.complex === 1 ? '' : 'hide'} style={{ padding: '10px' }}>
                                                        <p>
                                                            Marketing Communication ist die Verbindung nach draußen zu den Menschen. Dieter ist unterwegs um ein stetig wachsendes Publikum von einer Technologie zu begeistern und die neuen Entwicklungen aus dem Unternehmen über unterschiedliche Kanäle zu verbreiten.
                                                        </p>
                                                        <Icon className="socialImage active" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                                        <img className="socialImage active" alt={'rip'} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/86f3e9e7-b912-41de-bd5b-f12073cb8753.jpg`}/>
                                                        <img className="socialImage active" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                                        <img className="socialImage active" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                                    </div>
                                                </div>
                                                <div
                                                    className={this.state.complex === 2 ? 'icon__accordion__content trans show' : 'icon__accordion__content trans'}
                                                >
                                                    <div className={this.state.complex === 2 ? '' : 'hide'} style={{ padding: '10px' }}>
                                                        <p>
                                                        Wie entwickelt sich das Unternehmen weiter? In welche Richtung wird die zukünfitge Arbeit ausgerichtet? Welche Projekte werden in Angriff genommen? Es sind die großen strategischen Fragen, die normalerweise an dieser Stelle beantwortet werden. Wo liegen mögliche Absatzmärkte, welche Kunden kann man ansprechen und welchen Erfolg verspricht dieses oder jenes Geschäftsmodell?
                                                        </p>
                                                        <Icon className="socialImage active" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                                        <img className="socialImage active" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/86f3e9e7-b912-41de-bd5b-f12073cb8753.jpg`}></img>
                                                        <img className="socialImage active" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                                        <img className="socialImage active" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                                    </div>
                                                </div>
                                                <div
                                                    className={this.state.complex === 3 ? 'icon__accordion__content trans show' : 'icon__accordion__content trans'}
                                                >
                                                    <div className={this.state.complex === 3 ? '' : 'hide'} style={{ padding: '10px' }}>
                                                        <p>
                                                        Real Estate -- also die Liegenschaftsangelegenheiten eines Unternehmens. Eine staubtrockene Angelegenheit irgendwo im Papierwust zwischen Behördenschreibtischen, Baugenehmigungen, Immobilienmarkt, Brandschutzverordnungen und der Diskussion mit dem Handwerker, ob die Wand nun gerade, der Flansch richtig gesetzt und das Elektrokabel wirklich ausgerechnet da verlegt werden muss.
                                                        </p>
                                                        <Icon className="socialImage active" alt={"rip"} icon="ts-message" style={{ fontSize: '30px' }} />
                                                        <img className="socialImage active" alt={"rip"} src={`//chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/86f3e9e7-b912-41de-bd5b-f12073cb8753.jpg`}></img>
                                                        <img className="socialImage active" alt={"rip"} src={`http://chayns1.tobit.com/SlitteRessource/Locations/1214/TappMaker/Images/8c05c3db-a681-4cdf-aade-43b3ebc33365.jpg`}></img>
                                                        <img className="socialImage active" alt={"rip"} src={`http://www.cvjm-blickwechsel.de/wp-content/uploads/2015/11/facebook-icon.png`}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
