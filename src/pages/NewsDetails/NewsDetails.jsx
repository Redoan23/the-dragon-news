import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { useParams } from 'react-router-dom';

export default function NewsDetails() {
    const  {id} = useParams()
    // console.log(id)
    // const filteredNews=
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           
            <div>
                <div>
                    <h1>Dragon News</h1>
                    {id}
                </div>
            </div>
        </div>
    )
}