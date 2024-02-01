import { ArrowRight, Globe, Person, SignNoRightTurn } from 'react-bootstrap-icons';
import './head.component.css';

export function Headcomonent() {
    return (
        <div>
            <div className="bg">
                <h1 className='head-line'>Bayanno Hosiptal Management System</h1>
                <ol className='menu-bar1'>
                    <li className='admin'><Person className='person-icon'></Person> Admin</li>
                    <li className='website'><Globe className='website-icon'></Globe> Website</li>
                    <a href="/home-page">
                    <li className='logout'>Logout <ArrowRight className='lagout-icon'></ArrowRight></li>
                    </a>
                  
                </ol>
            </div>
        </div>

    )
}