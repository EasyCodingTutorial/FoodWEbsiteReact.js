import './Home.css'


// For Components
import Content from '../../Components/Content/Content'
import Box from '../../Components/Box/Box,'
const Home = () => {
    return (
        <>
            <div className="Home">

                <div className="MainBox">
                    <img src="/assets/Home1.jpg" className='img-fluid' alt="" />
                    <div className="boxContent">
                        <h6>Spicy Hot Sauces</h6>
                    </div>
                </div>

                <div className="MainBox">
                    <img src="/assets/Home2.jpg" className='img-fluid' alt="" />
                    <div className="boxContent">
                        <h6>Spicy Hot Sauces</h6>
                    </div>
                </div>

                <div className="MainBox">
                    <img src="/assets/Home3.jpg" className='img-fluid' alt="" />
                    <div className="boxContent">
                        <h6>Spicy Hot Sauces</h6>
                    </div>
                </div>

                <div className="MainBox">
                    <img src="/assets/Home4.jpg" className='img-fluid' alt="" />
                    <div className="boxContent">
                        <h6>Spicy Hot Sauces</h6>
                    </div>
                </div>




            </div>

            {/* For Popular Dessert  */}
            <div className="PopularDessert container">
                <Content h6Title="Popular Dessert" pDesc="Why Not Lets Try Our Best Desserts" />

                <div className="row">

                    <div className="col-sm-3">
                        <Box />
                    </div>

                    <div className="col-sm-3">
                        <Box />
                    </div>


                    <div className="col-sm-3">
                        <Box />
                    </div>


                    <div className="col-sm-3">
                        <Box />
                    </div>







                </div>

                <div className="row">

                    <div className="col-sm-3">
                        <Box />
                    </div>

                    <div className="col-sm-3">
                        <Box />
                    </div>


                    <div className="col-sm-3">
                        <Box />
                    </div>


                    <div className="col-sm-3">
                        <Box />
                    </div>







                </div>


            </div>
            {/* For Popular Dessert  */}

            {/* For Newsletter */}
            <div className="newsLetter container">
                <div className="boxNews">
                    <h6>Subscribe To Our Newsletter For Daily New Receips</h6>
                    <div>
                        <input type="text" placeholder='Please Enter Your Email To Subscribe' id='inputField' className='form-control' />
                        <label htmlFor="inputField" className='btn'>Subscribe</label>
                    </div>
                </div>
            </div>
            {/* For Newsletter */}

            {/* For Latest Receips */}
            <div className="PopularDessert container">
                <Content h6Title="Latest Dessert" pDesc="Why Not Lets Try Our Best Desserts" />

                <div className="row">

                    <div className="col-sm-3">
                        <Box />
                    </div>

                    <div className="col-sm-3">
                        <Box />
                    </div>


                    <div className="col-sm-3">
                        <Box />
                    </div>


                    <div className="col-sm-3">
                        <Box />
                    </div>







                </div>

                <div className="row">

                    <div className="col-sm-3">
                        <Box />
                    </div>

                    <div className="col-sm-3">
                        <Box />
                    </div>


                    <div className="col-sm-3">
                        <Box />
                    </div>


                    <div className="col-sm-3">
                        <Box />
                    </div>







                </div>


            </div>
            {/* For Latest Receips */}

            {/* For Custom */}
            <div className="custom container">
                <div className="row">

                    <div className="col-sm-8">
                        <div className="container mostPopular">
                            <Content h6Title="Most Popular Dessert" pDesc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, culpa!" />

                            <div className="row">

                                <div className="col-sm-6">
                                    <Box />
                                </div>

                                <div className="col-sm-6">
                                    <Box />
                                </div>

                                {/*  */}

                                <div className="col-sm-6">
                                    <Box />
                                </div>

                                <div className="col-sm-6">
                                    <Box />
                                </div>
                                {/*  */}

                                <div className="col-sm-6">
                                    <Box />
                                </div>

                                <div className="col-sm-6">
                                    <Box />
                                </div>
                                {/*  */}

                                <div className="col-sm-6">
                                    <Box />
                                </div>

                                <div className="col-sm-6">
                                    <Box />
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="col-sm-4">

                        {/* For Cook */}
                        <div className="boxCustom">
                            <h6>Most Popular Cook</h6>
                            <img src="/assets/mostpopularcook.jpg" className='img-fluid' alt="" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, corporis.
                            </p>
                        </div>

                        {/* For About us */}
                        <div className="boxCustom">
                            <h6>About us</h6>
                            <img src="/assets/img.jpg" className='img-fluid' alt="" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, corporis.
                            </p>
                        </div>

                        <div className="boxCustom forBreakLunchDinner">
                            {/* for Breakfast */}
                            <div>
                                <img src="/assets/breakfast.jpg" className='img-fluid' alt="" />
                                <div className="boxContent">
                                    <h6>Breakfast</h6>
                                </div>
                            </div>
                            {/* for Lunch */}
                            <div>
                                <img src="/assets/lunch.jpg" className='img-fluid' alt="" />
                                <div className="boxContent">
                                    <h6>Lunch</h6>
                                </div>
                            </div>
                            {/* for dinner */}
                            <div>
                                <img src="/assets/dinner.jpg" className='img-fluid' alt="" />
                                <div className="boxContent">
                                    <h6>Dinner</h6>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
            {/* For Custom */}



        </>
    )
}

export default Home