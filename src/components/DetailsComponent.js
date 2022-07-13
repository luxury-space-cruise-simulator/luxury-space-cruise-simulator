const DetailsComponent = (props) => {
    
    if ( props.tourDropdown === "curiosity" && props.buttonClick) {
        return (
        <div className="wrapper">
            <div className="tourDetails">
                <h4>Gale Crater</h4> 

                <p>Come see one of the greatest dry lakes in Mars! North of the Aeolis quadrangle, the Gale crater is so big that it is home to Aeolis Mons, a whole mountain 5,500m from the crater floor. Notable for its clay and sulfate deposits, come visit our on-site Gale Crater spa for a red clay masque like you’ve never experienced before!</p>  
            </div>
        </div>
            )
        }   else if ( props.tourDropdown === "perseverance" && props.buttonClick) {
            return (
            <div className="wrapper">
                <div className="tourDetails">
                    <h4>Jezero Crater</h4> 

                    <p>Explore the Jezero Crater, located in the Syrtis Major quadrangle! Billions of years ago, the crater was home to an ancient river delta. This tour includes a Space Rock Walk within Séítah, meaning “amidst the sand in Navajo”, a distinctly popular site with breathtaking views of Martian rocks, minerals, and soil. </p>  
                </div>
            </div>
            )
        } else if (props.tourDropdown === "spirit" && props.buttonClick) {
            return (
            <div className="wrapper">
                <div className="tourDetails">
                    <h4>Gusev Crater</h4> 

                    <p>You can’t get a location hotter than this! The Gustav crater, in the Aelios quadrangle is home to the former site of an ancient lakebed and volcano. Visitors can enjoy the on-site meals prepared by our chef-du-cuisine Isaac Hayes including such delicacies as ancient charcoal bbq and lava cake.</p>  
                </div>
            </div>
            )
        } else if (props.tourDropdown === "opportunity" && props.buttonClick) {
            return (
            <div className="wrapper">
                <div className="tourDetails">
                    <h4>Meridiani Planum</h4> 

                    <p>This tour is located just south of the equator and hosts a rare occurrence of gray crystalline hematite. At Meridiani Planum, visit the exclusive Meridiani Spa where you can relax in the hot springs, experience a hematite hot stone massage, or soak in the volcanic basalt float tubs for our 5-star rated sensory deprivation experience!</p>  
                </div>
            </div>
        
        )
    }

}
export default DetailsComponent;