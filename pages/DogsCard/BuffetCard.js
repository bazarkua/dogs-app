import React from "react";
import "../Buffet/buffet.css"

class BuffetCard extends React.Component {

    render() {
        return (
            <>
                        <div className="col-md-12 col-lg-4">
                            <div className="grey-box">
                                <div className="row">
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-trash float-end">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                className="bi bi-trash"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                />
                                            </svg>
                                        </button>
                                        <button type="submit" className="btn btn-edit float-end">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                className="bi bi-pencil-square"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>


                                    <div className="col-md-4 ">Siberian Husky</div>

                                <div className="row">
                                    <div className="col-md-12 fw-bold">
                                        <img
                                            className="col-12"
                                            src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-464163411.jpg?crop=1.0xw:1xh;center,top&resize=980:*"
                                            alt="Dog"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                </div>
                                <div className="row fs-6">
                                    <div className="col-md-2 " />
                                    <div className="col-md-8 ">The only thing better than one adorable husky is an entire sled team of 'em. Just be prepared for their outsized energy.</div>
                                </div>
                            </div>
                        </div>
                <div className="col-md-12 col-lg-4">
                    <div className="grey-box">
                        <div className="row">
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-trash float-end">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill="currentColor"
                                        className="bi bi-trash"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                    </svg>
                                </button>
                                <button type="submit" className="btn btn-edit float-end">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill="currentColor"
                                        className="bi bi-pencil-square"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>


                            <div className="col-md-8">Pembroke Welsh Corgi</div>

                        <div className="row">
                            <div className="col-md-12 fw-bold">
                                <img
                                    className="col-12"
                                    src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/pembroke-welsh-corgi.jpg?crop=1xw:0.9997114829774957xh;center,top&resize=980:*"
                                    alt="Dog"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="row fs-6">
                            <div className="col-md-2 " />
                            <div className="col-md-8 text-center">Trust the Queen of England to have an excellent taste in dogs. Elizabeth II's love for corgis goes unmatched — she's had over 30 of them in her lifetime!</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="grey-box">
                        <div className="row">
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-trash float-end">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill="currentColor"
                                        className="bi bi-trash"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                    </svg>
                                </button>
                                <button type="submit" className="btn btn-edit float-end">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill="currentColor"
                                        className="bi bi-pencil-square"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                            <div className="col-md-8">Australian Shepherd</div>

                        <div className="row">
                            <div className="col-md-12 fw-bold">
                                <img
                                    className="col-12"
                                    src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x3839/australian-shepherd.jpg?resize=980:*"
                                    alt="Dog"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="row fs-6">
                            <div className="col-md-2 " />
                            <div className="col-md-8 text-center">Beauty and brains, Aussies have got it all. These intelligent pups like having a job to do, so the people-pleasers pick up new tricks right away.</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BuffetCard;