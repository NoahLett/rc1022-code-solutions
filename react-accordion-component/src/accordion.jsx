import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.topics = [
      { title: 'Hypertext Markup Language', text: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.' },
      { title: 'Cascading Style Sheets', text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' },
      { title: 'JavaScript', text: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.' }
    ];
    this.state = {
      isClicked: false,
      viewIndex: null
    };
    this.setOpenTopic = this.setOpenTopic.bind(this);
  }

  setOpenTopic(index) {
    if (this.state.viewIndex !== index) {
      this.setState({ viewIndex: index });
    } else if (this.state.viewIndex === index) {
      this.setState({ viewIndex: null });
    }
  }

  render() {
    return (
      this.topics.map((topic, index) => {
        const handleClick = () => {
          this.setOpenTopic(index);
        };
        if (this.state.viewIndex === index) {
          return (
            <div className='container' key={index}>
              <h1 className='topic' onClick={handleClick}>{topic.title}</h1>
              <p className='text'>{topic.text}</p>
            </div>
          );
        } else {
          return (
            <div className='container' key={index}>
              <h1 className='topic' onClick={handleClick}>{topic.title}</h1>
            </div>
          );
        }
      })
    );
  }
}

const element = (
  <Accordion/>
);

export default element;
