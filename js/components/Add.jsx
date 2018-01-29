export class Add extends React.Component {

  constructor(props) {
    super(props);
    // This line is important!
    this.handleClick = this.handleClick.bind(this);
    this.agreeChange = this.agreeChange.bind(this);

    this.state = {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true
    };
  }

  componentDidMount() { 
    this.author.focus();
  }

  handleClick(e) {
    e.preventDefault();
    // alert ( this.author.value + '\n' + this.text.value);
    window.ee.emit('news.add', [
      {
        author: this.author.value,
        text: this.text.value,
        bigText: '...'
      }
    ]);

    this.text.value = '';
    this.setState({textIsEmpty: true});
  }

  fieldChange(fieldName, e) {
    this.setState({[fieldName + 'IsEmpty']: !e.target.value.trim().length});
  }

  agreeChange(e) {
    this.setState({agreeNotChecked: !e.target.checked});
  }

  render() {

    let {agreeNotChecked, authorIsEmpty, textIsEmpty} = this.state;

    return(
      <form className='add cf'>
        <input 
          type='text'
          className='add__author' 
          onChange={ this.fieldChange.bind(this, 'author') }
          placeholder='Ваше имя' 
          ref={(el) => { this.author = el; }}
        />
        <textarea 
          className='add__text' 
          placeholder='Текст новости' 
          onChange={ this.fieldChange.bind(this, 'text') }
          ref={(el) => { this.text = el; }}
        ></textarea>
        <label className='add__checkrule'>
          <input 
            type='checkbox'
            className='agree' 
            onChange={this.agreeChange}
            ref={(el) => { this.checkrule = el; }}
          />
          Я согласен с правилами
        </label>
        <button 
          className='add__btn'
          ref={(el) => { this.alert_button = el; }}
          onClick={this.handleClick}
          disabled={agreeNotChecked || authorIsEmpty || textIsEmpty} >
          Добавить Новость
        </button>
      </form>
    )
  }
}