import Header from '../components/Header';
import starFull from '../img/star-full.svg';
import Button from '../components/Button';
import nextIcon from '../img/next.svg';
import phone from '../img/phone.svg'

export default function VacancyPage() {
    return (
        <div className="page-container VacancyPage">
            <Header></Header>
            <p className="main-title">НАЗВАНИЕ СТАЖИРОВКИ </p>
            <div className='vacancy-container'>
                <div className='vacancy-info-container'>
                    <div>
                        <Button buttonText="НАПРАВЛЕНИЕ" buttonClass="info-btn"></Button>
                        <Button buttonText="ТРЕБУЕМЫЙ ОПЫТ" buttonClass="info-btn"></Button>
                        <Button buttonText="ГРАФИК РАБОТЫ" buttonClass="info-btn"></Button>
                    </div>
                    <img alt="star" src={starFull}></img>
                </div>
                <textarea rows={4}>описание стажировки описание стажировки описание стажировки описание стажировки описание стажировки описание стажировки описание стажировки описание стажировки описание стажировки описание стажировки </textarea>
                <h3>УРОВЕНЬ ДОХОДА</h3>
                <Button buttonText="ОТКЛИКНУТЬСЯ"></Button>
                <div className='vacancy-company-info-container'>
                    <div className='skills-container'>
                        <h4>ЧЕМУ НАУЧИТЕСЬ:</h4>
                        <ul>
                            <li>пункт 1</li>
                            <li>пункт 2</li>
                            <li>пункт 3</li>
                            <li>пункт 4</li>
                            <li>пункт 5</li>
                            <li>пункт 6</li>
                        </ul>
                    </div>

                    <div className='company-info'>
                        <div>
                            <img alt="phone" src={phone}></img>
                            <h4>КОМПАНИЯ</h4>
                        </div>
                        <ul>
                            <li>информация о компании</li>
                            <li>информация о компании</li>
                            <li>информация о компании</li>
                            <li>информация о компании</li>
                            <li>информация о компании</li>
                            <li>информация о компании</li>
                        </ul>
                    </div>
                </div>
                <div className='similar'>
                    <img alt="next" src={nextIcon}></img>
                    <p>ПОХОЖЕЕ</p>
                </div>
            </div>
        </div>
    )
}