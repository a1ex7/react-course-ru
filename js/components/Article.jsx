export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
    // This line is important!
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.setState({visible: true});
  }

  render() {
    
    let {author, text, bigText} = this.props.data;
    let {visible} = this.state;

    return(
      <article className="news__item" >
        <p className="news__author">{author}</p>
        <p className="news__text">{text}</p>
        {visible === true ? 
          <p className='news__big-text'>{bigText}</p> 
          : 
          <a href="#" 
            className='news__readmore' 
            onClick={this.handleClick}>
            Подробнее
          </a>
        }
      </article>
    );
  }
};