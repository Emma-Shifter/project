import defaultImage from '../img/default-img.png';
import Header from '../components/Header';
import Option from '../components/Option';
import Search from '../components/Search';
import starFull from '../img/star-full.svg';
import peopleApprove from '../img/people-approve.svg';

export default function CatalogTestsPage() {
    return (
        <div className="page-container VacancyPage">
            <Header></Header>
            <Search searchClass="main-search"></Search>
            <div className='select-container'>
                <Option optionText="Направление"></Option>
                <Option optionText="Работодатель"></Option>
            </div>
            <div className='testcase-card-list'>
                <div className='testcase-card'>
                    <img alt='img' src={defaultImage}></img>
                    <div className='testcase-info-container'>
                        <div>
                            <p className='testcase-title'>НАЗВАНИЕ ТЕСТОВОГО ЗАДАНИЯ</p>
                            <img alt='favorite' src={starFull}></img>
                        </div>
                        <p className='testcase-card-company'>от кого тестовое</p>
                        <p className='testcase-card-description'>Описание задания и немного данных о нем</p>
                        <div className='people-approve-container'>
                            <img alt='people' src={peopleApprove}></img>
                            <span>15</span>
                        </div>
                    </div>
                </div>
                <div className='testcase-card'>
                    <img alt='img' src={defaultImage}></img>
                    <div className='testcase-info-container'>
                        <div>
                            <p className='testcase-title'>НАЗВАНИЕ ТЕСТОВОГО ЗАДАНИЯ</p>
                            <img alt='favorite' src={starFull}></img>
                        </div>
                        <p className='testcase-card-company'>от кого тестовое</p>
                        <p className='testcase-card-description'>Описание задания и немного данных о нем</p>
                        <div className='people-approve-container'>
                            <img alt='people' src={peopleApprove}></img>
                            <span>15</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}