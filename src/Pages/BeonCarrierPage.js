import BeonCarrierImage from '../images/beoncarrier.JPG';

function BeonCarrierPage() {
    return(

        <div className="container mx-auto">
            <div >
                NTG / Beon Carrier
            </div>

            <p>
            Beon Carrier is the fast and free enhanced technology to help dispatchers and owner-operators find, bid on and win the right loads at the best rate. With a web-based portal or mobile app option, we consolidate all these actions into a single easy-to-use platform, saving you hours on the phone or sending constant emails chasing freight.
            </p>

            
                <div>Role</div>
                <div>Tools</div>
                <div>Duration</div>
        

            <div className="columns-2">
                <div className="w-full">
                    <img className="object-fill" src={BeonCarrierImage} alt=""/>
                </div> 

                <div className="w-full justify-items-center pt-[35%]">
                    Beon Carrier Page
                </div>         
            </div>

            <div>

            </div>
        </div>
        
    )
}
export default BeonCarrierPage;