import ButtonContact from "../button/ButtonContact"
import ButtonEvent from "../button/ButtonEvents"
import EventPertama from "../section/eventpertama"
import SectionLima from "../section/sectionlima"

function Event()
{
    return(
        <>
        <div className="" style={{overflow: 'hidden'}}>
            <div className="container m-5" style={{position: "absolute", fontSize: 25}}>
                <h1 style={{fontWeight:'bold'}} className="col-5 text-white">BUILD YOUR EVENTS WITH US</h1>
                <p className="col-7 text-white">We provide an easy and all-in-one cashless and guest management system to deliver the smoothest guest experience and increase visibility and profitability for your events.</p>
            <ButtonEvent label="Build Your Event"/>
            </div>
            <video autoPlay muted width="100%" loop >
                <source src={"https://asset.tix.id/tix-events/compro/TIX%20Event%20Hero%20Video.mp4"} type="video/mp4"/>
            </video>
        </div>
        <div className="bg">
            <div className="container col-7" style={{textAlign:'center'}}>
                <h2 className="p-5 text-white" style={{fontWeight:'bold'}}>BEST TOOLS TO MAKE SUCCESSFUL EVENTS</h2>
                <p className="ml-auto mr-auto text-white">Digitalize your events! Elevate your event to new heights with our comprehensive features. From cutting-edge technology to meticulous planning, we ensure every detail is perfect. Trust us to exceed your expectations and deliver an unforgettable experience.</p>
                <ButtonEvent label="Contact Us"/>
            </div>
            <div className="row mt-5">
                <EventPertama
                showAll={() => {}} 
                data={[
                    {
                        image : '../../src/assets/images/icon-1.PNG',
                        label : 'Online Ticketing',
                        desc : 'Effectively promote and sell your tickets for your events  with our online ticketing platform.'
                    },
                    {
                        image : '../../src/assets/images/icon-2.png',
                        label : 'On-Site Registration',
                        desc : 'Sell tickets at the door and easily collect guest data depending on your needs.'
                    },
                    {
                        image : '../../src/assets/images/icon-3.PNG',
                        label : 'Access Control',
                        desc : 'Seamlessly track entry and exit of your attendees.'
                    },
                    {
                        image : '../../src/assets/images/icon-4.PNG',
                        label : 'Cashlesh Payment',
                        desc : 'Seamless and integrated payment method with our wireless NFC tech.'
                    },
                    {
                        image : '../../src/assets/images/icon-5.PNG',
                        label : 'Analytics',
                        desc : "Serve a custom analytics report based on each clients' specific needs."
                    }
                ]}
                />
            </div>
        </div>
        <div className="bg-1">
            <div className="container col-9 pt-5">
                <h1 className="text-white" style={{fontWeight:'bold', marginLeft:'auto', marginRight:'auto', textAlign:'center'}}>UNLOCK LIMITLESS POSSIBILITIES WITH TIX EVENTS</h1>
                <div className="row mt-5">
                    <div className="col-5">
                        <img src="https://asset.tix.id/tix-events/compro/images/image-seamless.webp" style={{width:'100%'}} alt="" />
                    </div>
                    <div className="col m-4">
                        <h1 className="text-white" style={{fontWeight:'bold'}}>EASY TO USE</h1>
                        <p className="text-white">Designed with simplicity in mind. From initial setup to seamless execution, we provide a hassle-free experience, allowing you to focus on what truly matters – creating memorable moments. With user-friendly interfaces and easy flow, your guest will easily buy and attend to your event without worry.</p>
                        <ButtonContact label="Contact Us"/>
                    </div>
                </div>
            </div>
            <div style={{height:200, backgroundColor:'#1A1D74'}}></div>
            <div style={{backgroundColor:'#1A1D74'}}>
                <div className="col-9 container">    
                    <div className="row mt-5 container">
                        <div className="col m-4">
                            <h1 className="text-white" style={{fontWeight:'bold'}}>EVERYTHING MADE CASHLESS</h1>
                            <p className="text-white">Get ready to revolutionize sales at your event! All transaction in the palm of every guest’s hand. With our NFC form, all guest can do transaction without bringing their wallet. So they can enjoy the party uninterrupted. Fasten the service and increase their spending.</p>
                            <ButtonContact label="Contact Us"/>
                        </div>
                        <div className="col-5">
                            <img src="https://asset.tix.id/tix-events/compro/images/image-cashless.webp" style={{width:'100%'}} alt="" />
                        </div>
                     </div>
                </div>
            </div>
            <div style={{height:200, backgroundColor:'#1A1D74'}}></div>
            <div style={{backgroundColor:'#1A1D74'}}>
                <div className="col-9 container">    
                    <div className="row mt-5 container">
                        <div className="col-5">
                            <img src="https://asset.tix.id/tix-events/compro/images/image-leads.webp" style={{width:'100%'}} alt="" />
                        </div>
                        <div className="col m-4">
                            <h1 className="text-white" style={{fontWeight:'bold'}}>GENERATE LEADS</h1>
                            <p className="text-white">With our event service, effortlessly generate leads at every event. Strategic marketing, streamlined registration, data analytics, networking opportunities, and post-event follow-up support ensure optimal lead generation.</p>
                            <ButtonContact label="Contact Us"/>
                        </div>
                     </div>
                </div>
            </div>
            <div style={{height:200, backgroundColor:'#1A1D74'}}></div>
            <div style={{backgroundColor:'#1A1D74'}}>
                <div className="col-9 container">    
                    <div className="row mt-5 container">
                        <div className="col m-4">
                            <h1 className="text-white" style={{fontWeight:'bold'}}>CREATE ENGAGING EVENTS</h1>
                            <p className="text-white">Elevate customer experiences with our engaging events! Tailored to your needs, filled with compelling content, interactive networking, and empowerment moments. Join us and create unforgettable events.</p>
                            <ButtonContact label="Contact Us"/>
                        </div>
                        <div className="col-5">
                            <img src="https://asset.tix.id/tix-events/compro/images/image-engage.webp" style={{width:'100%'}} alt="" />
                        </div>
                     </div>
                </div>
            </div>
            <div style={{height:200, backgroundColor:'#1A1D74'}}></div>
            <div style={{backgroundColor:'#1A1D74'}}>
                <div className="col-9 container">    
                    <div className="row mt-5 container">
                        <div className="col-5">
                            <img src="https://asset.tix.id/tix-events/compro/images/image-nfc.webp" style={{width:'100%'}} alt="" />
                        </div>
                        <div className="col m-4">
                            <h1 className="text-white" style={{fontWeight:'bold'}}>VARIOUS NFC FORM</h1>
                            <p className="text-white">Experience NFC versatility! From tags to stickers, card, and wristbands, our technology enhances communication and simplifies interactions. Embrace the convenience of NFC today!</p>
                            <ButtonContact label="Contact Us"/>
                        </div>
                     </div>
                </div>
            </div>
            <div style={{height:200, backgroundColor:'#1A1D74'}}></div>
            <div style={{backgroundColor:'#1A1D74'}}>
                <div className="col-9 container">    
                    <div className="row mt-5 container">
                        <div className="col m-4">
                            <h1 className="text-white" style={{fontWeight:'bold'}}>AVAILABLE PAYMENT METHODS</h1>
                            <p className="text-white">We provide all payment experience to your needs! Explore our wide selection of payment methods. We strive to provide convenience and flexibility for your events.</p>
                            <ButtonContact label="Contact Us"/>
                        </div>
                        <div className="col-5">
                            <img src="https://asset.tix.id/tix-events/compro/images/image-payment.webp" style={{width:'100%'}} alt="" />
                        </div>
                     </div>
                </div>
            </div>
            <div className="container col-6" style={{textAlign:'center'}}>
                <h2 className="p-5 text-white" style={{fontWeight:'bold'}}>CREATE OUTSTANDING EVENTS</h2>
                <p className="ml-auto mr-auto text-white">Let us help you to exceed your expectations and deliver an unforgettable experience, from Music Festival, Concert, Food Festival, Exhibition, Workshop, Corporate Events, and any other type of events.</p>
                <ButtonEvent label="Contact Us"/>
            </div>
            <div className="d-flex justify-content-center">
                <img src="https://asset.tix.id/tix-events/compro/images/logo-tix-outstanding.webp" style={{width: '80%'}} alt="" />
            </div>
        </div>
        <div style={{height:200, backgroundColor:'#512798'}}></div>
            <div style={{backgroundColor:'#512798'}}>
                <div className="card col-9 container" style={{backgroundColor:'#1A1D74'}}>    
                    <div className="card-body p-5">
                        <div className="row">
                            <div className="col-8 text-white">
                                <h2 style={{fontWeight:'bold'}}>BEHIND TIX EVENTS</h2>
                                <p>Established in 2018, TIX ID quickly rose to lead the online cinema ticketing in Indonesia. Forging a strong partnership with the three largest cinema brands in the country (XXI, CGV, Cinépolis), as well as many renowned movie studios and OTT streaming service, solidifying our position in the entertainment industry. Teaming up with DANA to provide a seamless, fast, and secure payment method.</p>
                                <p>Now we set our sight on the event ticketing space by leveraging our technology, expertise, and industry relationship to redefine the landscape. With our unwavering dedication to excellence, TIX ID aims to bring more diverse range of events to all of our users and to a wider audience in Indonesia.</p>
                            </div>
                            <div className="col">
                                <img src="https://asset.tix.id/tix-events/compro/images/logo-tix-about-us.webp" width={'100%'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-5 p-5" style={{border: 'none',backgroundColor:'#512798'}}>
                    <div className="card-body container">
                    <SectionLima title="AWESOME EVENTS OVER THE PAST YEARS" 
                        showAll={() => {}} 
                        data={[
                        {
                            title : "Art Jakarta 2023",
                            video : "https://youtube.com/embed/c1DthcwICKY?si=tlE1rXj1TA00EOYWk",
                            list  : "Online Ticketing • On-Site Registration • Digital Invitation • Access Control • Analytics"
                        },
                        {
                            title : "John Wixk Continental Experience",
                            video : "https://youtube.com/embed/aX2Knqgzi8A?si=_ENFo_R54GRCkTeC",
                            list  : "Access Control • Digital Voucher"
                        },
                        {
                            title : "Finns NYE 2022",
                            video : "https://youtube.com/embed/db3Nfqi9GhU?si=m8oC_Np-v2oD_kH7",
                            list  : "On-Site Registration • Access Control • Cashlesh Payment • Analytics"
                        }
                        ]}
                        />
                    </div>
                </div>
            </div>
        <div className="bg-2">
            <div className="card col-9 container" style={{border: 'none',backgroundColor:'#1A1D74', height: 450}}>    
                <div className="card-body">
                    <div className="row" style={{backgroundImage: "url('https://asset.tix.id/tix-events/compro/images/rect-contact-form-top.webp')"}}>
                        <div className="col-5 text-white">
                            <h1 style={{fontWeight:'bold'}}>READY TO CREATE EVENT WITH US?</h1>
                            <p>Are you interested with TIX EVENTS for your next amazing event? Or do you have some questions? Get in touch with us using this form, or you can send us email at events@tix.id</p>
                            <img src="https://asset.tix.id/tix-events/compro/images/rect-contact-form-bottom.webp" style={{width:'100%', paddingTop: 50, marginLeft: 20}} alt="" />
                        </div>
                        <div className="col" style={{backgroundColor:'white'}}>
                            <form action="" className="container mt-3">
                                <label htmlFor="name">*Name</label>
                                <input type="text" name="name" style={{width:'100%'}}/>
                                <label htmlFor="email">*Email</label>
                                <input type="email" name="email" style={{width:'100%'}}/>
                                <label htmlFor="phone">*Phone Number</label>
                                <input type="number" name="phone" style={{width:'100%'}}/>
                                <label htmlFor="message">*Message</label>
                                <textarea name="message" id="" cols="50" rows="3" style={{width:'100%'}}></textarea>
                                <label htmlFor="">Attachment</label>
                                <p className="text-secondary" style={{fontSize: 13}}>Upload any relevant files regarding your event. *Max size 5 mb</p>
                                <label htmlFor="file" className="w-1/2 lg:w-1/5 flex flex-col items-center p-2 bg-white text-blue rounded-full tracking-wide border border-primary-gray cursor-pointer hover:opacity-75" id="fileUpload">
                                    <span className="text-sm font-semibold text-primary-gray" name="file">Browse File</span>
                                    <input type="file" name="file" className="hidden" accept=".pdf,.docx,.doc,.xlsx,.xls,.pptx,.ppt,.rar,.zip,.jpg,.jpeg,.png,.mp4,.mov"/>
                                </label>
                                <ButtonEvent label="Submit" type="submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Event