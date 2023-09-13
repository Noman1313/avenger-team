/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {

    const [allActors, setAllActors] = useState([])

    const [selectedActors, setSelectedActors] = useState([])

    const [totalCost, setTotalCost] = useState(0)

    const [remaining, setRemaining] = useState(0)

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])
    // console.log(allActors);

    const handleSelectActor = (actor) => {
        const isExist = selectedActors.find((item) => item.id === actor.id)
        // console.log(isExist);
        let count = actor.salary;
        if (isExist) {
            return alert("already booked")
        }
        else {
            selectedActors.forEach(item => {
                count = count + item.salary;
            })
            // console.log(count);
            const totalRemaining = 40000 - count;
            if (count > 40000) {
                return alert('taka nai ')
            }
            else {
                setTotalCost(count);
                setRemaining(totalRemaining);

                setSelectedActors([...selectedActors, actor])
            }
        }
        // console.log(actor);
    }
    // console.log(selectedActors);


    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map(actor => (
                            <div key={actor.id} className="card">
                                <div className="card-img">
                                    <img className='photo' src={actor.image} alt="" />
                                </div>
                                <h3>{actor.name}</h3>
                                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></p>
                                <div className="info">
                                    <p>selary: ${actor.salary}</p>
                                    <p>{actor.role}</p>
                                </div>
                                <button onClick={() => handleSelectActor(actor)} className='card-btn'>Select</button>
                            </div>
                        ))
                    }
                </div>

                <div className="cart">
                    <Cart
                        selectedActors={selectedActors}
                        totalCost={totalCost}
                        remaining={remaining}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;