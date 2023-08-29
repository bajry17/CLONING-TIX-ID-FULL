import ButtonViews from "../button/ButtonViews"
import CareerPertama from "../section/careerpertama"

function Karir()
{
    return(
        <>
            <div className="container pt-5">
                <div style={{height:100}}></div>
                <div className="row">
                    <div className="col">
                        <img src="https://asset.tix.id/wp-content/uploads/2021/10/carrer-page-title.png" alt="" className="pb-5" style={{width: '100%'}}/>
                        <img  src="https://asset.tix.id/wp-content/uploads/2022/01/career-hero-2-1.png" style={{borderRadius: 12, width: '100%'}}/>
                    </div>
                    <div className="col">
                    <img src="https://asset.tix.id/wp-content/uploads/2022/01/career-hero-1-1.png" alt="" className="p-5" style={{width: '100%'}}/>
                    <p>Join the fun in delivering best entertainment apps that impactful for the society!</p>
                    <p>Here at TIXID, you’ll be working with a team full of bright talented minds who support each other and value teamwork.</p>
                    <p>Ready to take the next step in your career? Join us now!</p>
                    </div>
                </div>
                    <div className="d-flex justify-content-between">
                    <span className="h2 text-black mt-5" style={{fontWeight: 'bold'}}>AVAILABLE POSITIONS</span>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card container" style={{width: 270, height: 80, borderRadius: 20}}>
                                <a className="p-3" style={{textDecoration: 'none', fontWeight:'bold', fontSize: 20}} href="">Operation</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4" style={{width: '100%', height: 100}}>
                                    <span style={{fontWeight: 'bold', fontSize: 20}}>Business Development Manager</span>
                                    <button href="" className="btn-apply-career float-end p-2" style={{borderRadius: 20}}>APPLY NOW</button>                            
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-body p-4" style={{width: '100%', height: 100}}>
                                    <span style={{fontWeight: 'bold', fontSize: 20}}>Business Development Associate</span>
                                    <button href="" className="btn-apply-career float-end p-2" style={{borderRadius: 20}}>APPLY NOW</button>                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{height: 200}}></div>
                </div>

        </>
    )
}
export default Karir