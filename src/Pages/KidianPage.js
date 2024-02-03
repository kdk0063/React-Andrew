import KidianImage from '../images/kidian.JPG'

function KidianPage() {
    return(
        <div className="columns-2">
            <div className="w-full">
                <img className="object-fill" src={KidianImage} alt=""/>
            </div> 

            <div className="w-full justify-items-center pt-[35%]">
                Kidian Page
            </div>         
        </div>
    )
}
export default KidianPage;