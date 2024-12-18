import Button from '../components/Button';
import Header from '../components/Header';
import Option from '../components/Option';
import Search from '../components/Search';
import phone from '../img/phone.svg';
import starFull from '../img/star-full.svg';

export default function CatalogVacancyPage() {
    return (
        <div className="page-container VacancyPage">
            <Header></Header>
            <Search searchClass="main-search"></Search>
            <div className='select-container'>
                <Option optionText="Направление"></Option>
                <Option optionText="Работодатель"></Option>
            </div>
            <div className='vacancy-card-list'>
                <div className='vacancy-card'>
                    <div className='vacancy-card-header'>
                        <p className='vacancy-name'>НАЗВАНИЕ СТАЖИРОВКИ</p>
                        <div>
                            <img alt="phone" src={phone}></img>
                            <img alt="starFull" src={starFull}></img>
                        </div>
                    </div>
                    <h3>УРОВЕНЬ ДОХОДА</h3>
                    <p className='company-name'>КОМПАНИЯ</p>
                    <div className='interface-container'>
                        <div>
                            <Button buttonText="ТРЕБУЕМЫЙ ОПЫТ" buttonClass="info-btn"></Button>
                            <Button buttonText="ГИБКИЙ ГРАФИК" buttonClass="info-btn"></Button>
                        </div>
                        <Button buttonText="ОТКЛИКНУТЬСЯ" buttonClass="submit-btn"></Button>
                    </div>
                </div>

                <div className='vacancy-card'>
                    <div className='vacancy-card-header'>
                        <p className='vacancy-name'>НАЗВАНИЕ СТАЖИРОВКИ</p>
                        <div>
                            <img alt="phone" src={phone}></img>
                            <img alt="starFull" src={starFull}></img>
                        </div>
                    </div>
                    <h3>УРОВЕНЬ ДОХОДА</h3>
                    <p className='company-name'>КОМПАНИЯ</p>
                    <div className='interface-container'>
                        <div>
                            <Button buttonText="ТРЕБУЕМЫЙ ОПЫТ" buttonClass="info-btn"></Button>
                            <Button buttonText="ГИБКИЙ ГРАФИК" buttonClass="info-btn"></Button>
                        </div>
                        <Button buttonText="ОТКЛИКНУТЬСЯ" buttonClass="submit-btn"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}