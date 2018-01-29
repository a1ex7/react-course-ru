import {myNews} from 'js/data/myNews.js';

import {Add} from 'js/components/Add.jsx';
import {News} from 'js/components/News.jsx';

export class App extends React.Component {
  
  constructor(props) {
    super(props);
    window.ee = new EventEmitter();
    this.state = {news: myNews};
  }

  componentDidMount() { 
    window.ee.addListener('news.add', item => {
      this.setState( {news: item.concat(this.state.news)} )
    });
  }

  componentWillUnmount() {
    window.ee.removeListener('news.add');
  }

  render() {
    return (
      <div className='app'>
        <Add />
        <News data={this.state.news} />
      </div>
    );
  }
};