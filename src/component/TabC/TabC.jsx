import { useEffect, useState } from 'react';
import './TabC.css'
import SignleTab from '../SignleTab/SignleTab';

const TabC = () => {
    const [tab, setTab] = useState([])
    const [activeTab, setActiveTab] = useState("superCar");
    const [result, setResult] = useState([]);
    console.log(result);



    useEffect(() => {
        fetch("http://localhost:5000/toy")
            .then((res) => res.json())
            .then((result) => {
                setTab(result);
            })
    }, [])

    useEffect(() => {
        const filteredTab = tab?.filter((ta) => ta.SubCategory === activeTab);
        setResult(filteredTab);
    }, [tab, activeTab]);

    // <h2 className='text-4xl hexfont text-center mt-20 text-blue-600 '> Category</h2>

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center mt-10 mb-10 '>
                <div onClick={() => handleTabClick("superCar")}
                    className={`text-white rounded-xl p-5 font-bold bg-blue-600 mr-5 border-none superCar ${activeTab == "superCar" ? "excss" : ""
                        }`}
                >
                    Super Car
                </div>


                <div onClick={() => handleTabClick("truck")}
                    className={`text-white font-bold rounded-xl p-5 bg-blue-600 mr-5 border-none  truck ${activeTab == "truck" ? "excss" : ""
                        }`}
                >
                    Truck
                </div>

                <div onClick={() => handleTabClick("policeCar")}
                    className={`text-white font-bold rounded-xl p-5 bg-blue-600 mr-5 border-none  policeCar ${activeTab == "policeCar" ? "excss" : ""
                        }`}
                >
                    Police Car
                </div>
            </div>

                <div className='grid md:grid-cols-3'>
                    {
                        result?.map((ta) => (
                            <SignleTab

                                key={ta._id}
                                ta={ta}

                            ></SignleTab>
                        ))
                    }
                </div>
        </div>
    );
};

export default TabC;