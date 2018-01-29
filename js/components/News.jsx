import {Article} from 'js/components/Article.jsx';

export class News extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let {data} = this.props;
    let newsTemplate;

    if (data.length > 0) {
      newsTemplate = data.map(function(item, index) {
        return (
          <Article data={item} key={index}/>
        )
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }

    return (
      <div className="news" >
        <h3>Новости</h3>
        {newsTemplate}
        <strong 
          className={ 'news__count ' + (data.length > 0 ? '':'none') } >
          Всего новостей: {data.length}
        </strong>
      </div>
    );
  }
};