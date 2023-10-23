import Navbar from "../components/Navbar";
import ImageWithText from "../components/ImageWithText";
import ImagesOnGrid from "../components/ImagesOnGrid";
import '../base.css';

export default function MealInspiration() {
    return (
    <>
        <head>
            <title>Meal Inspiration</title>
        </head>
        <body>
            <Navbar></Navbar>
            <h1 className="mx-5">Air fried turkey stuffed capciums</h1>
            <div className="container">
            <div className="row">
                <div className="col">
                    <p>Stuffed peppers are a classic family meal—and they're fun to eat, too. 
                        Instead of roasting the sweet peppers in the oven, use an air fryer to get them crisp-tender but not soggy.</p>
                    <h1>Ingredients</h1>
                    <p>1 tablespoon olive oil <br></br>

                        12 ounces ground turkey <br></br>

                        ½ cup cooked brown rice <br></br>

                        ¼ cup panko breadcrumbs<br></br>

                        ¾ cup low-sodium marinara sauce <br></br>

                        3 tablespoons finely chopped flat-leaf parsley<br></br>

                        ¼ teaspoon ground pepper<br></br>

                        ¼ cup grated Parmesan cheese (1 oz.)<br></br>

                        ¼ cup shredded part-skim mozzarella cheese (1 oz.)<br></br>
                    </p>
                </div>
                <div className="col">
                    <p>Prep time: 15 mins      Cooking time: 15mins       Total time: 30mins</p>
                    <img src="stuffedcap.jpg" width={500}></img>
                </div>
            </div>
        </div>
        </body>
    </>
);
}