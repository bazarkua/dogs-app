import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";




let indexStart = 0;
let indexEnd = 5;
let url = `https://my-dog-breeds-api.herokuapp.com/dogBreeds/?_start=${indexStart}&_end=${indexEnd}`;

class DogsDashBoard extends React.Component{




    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
            isLoading: false,
            isError: false,
            hasMore: true,
            items: []

        };
    }

    fetchMoreData = () => {

        /*if (this.state.items.length >= this.state.users.length) {
            this.setState({ hasMore: false });
            return;
        }*/

        console.log(this.state.items);
        console.log(this.state.dogs);
        indexStart+=5;
        indexEnd+=5;
        console.log(indexStart);
        console.log(indexEnd);
        console.log(`https://my-dog-breeds-api.herokuapp.com/dogBreeds/?_start=${indexStart}&_end=${indexEnd}`)
        console.log(this.state.items.length)

        if(this.state.items.length !== indexStart){
            console.log("HERE WE GO!");
            this.setState({hasMore:false});
        }

        fetch(`https://my-dog-breeds-api.herokuapp.com/dogBreeds/?_start=${indexStart}&_end=${indexEnd}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    this.setState({ isError: true, isLoading: false });
                }
            })
            .then(data => {
                if(data.length < 5){
                    console.log("HERE WE GO!");
                    this.setState({hasMore:false});
                }
                console.log(data.length);
                this.setState({ users:data, isLoading: false });

                /*console.log(this.state.users[1].id);*/
            })

        setTimeout(() => {

            this.setState({

                items: this.state.items.concat(Array.from(this.state.dogs)),


            });
        }, 1000);
    };

    componentDidMount() {

        fetch(url)
            .then(response => {
                if (response.ok) {

                    return response.json();
                } else {
                    this.setState({ isError: true, isLoading: false });
                }
            })
            .then(data => {
                this.setState({ dogs:data, isLoading: false });
                this.setState({

                    items: this.state.items.concat(Array.from(this.state.dogs)),


                });
                 /*console.log(this.state.users[4].name);*/
            })

    }



    render() {

        const { isLoading, isError } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (isError) {
            return <div>Error</div>;
        }
        else {

            return (

                <div>
                    <InfiniteScroll
                        dataLength={this.state.items.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>All data is loaded!</b>
                            </p>
                        }
                    >
                        {

                            this.state.items.map((dog, indexU) => {

                                return (

                                    <div className="grey-box" key = {indexU}>
                                        <div className="col-md-2">
                                            <img src={dog.photo} alt="dog img" width={400}/>
                                        </div>
                                        <div className="row">

                                            <div className="col-md-2 fw-bold">Dog breed:</div>
                                            <div className="col-md-2">{dog.breed}</div>

                                        </div>

                                        <div className="row my-2">
                                            <div className="col-md-2 fw-bold">Breed type:</div>
                                            <div className="col-md-2">{dog.breedType}</div>
                                            <div className="col-md-2 fw-bold">Origin:</div>
                                            <div className="col-md-3">{dog.origin}</div>
                                        </div>
                                        <div className="row my-2">
                                            <div className="col-md-2 fw-bold">Popularity:</div>
                                            <div className="col-md-2">{dog.popularity}</div>
                                        </div>
                                        <div className="row my-2">
                                            <div className="col-md-2 fw-bold">Temperament:</div>
                                            <div className="col-md-2">{dog.temperament.map((index) =>{
                                                return(
                                                    <div className="col-md-2 fw-light">{index}</div>
                                                )
                                            })}</div>
                                        </div>
                                        <div className="row my-2">
                                            <div className="col-md-2 fw-bold">Hypoallergenic:</div>
                                            <div className="col-md-2">{dog.hypoallergenic}</div>
                                        </div>
                                        <div className="row my-2">
                                            <div className="col-md-2 fw-bold">Intelligence:</div>
                                            <div className="col-md-2">{dog.intelligence}</div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </InfiniteScroll>
                </div>
            );
        }
    }
}



export default DogsDashBoard;