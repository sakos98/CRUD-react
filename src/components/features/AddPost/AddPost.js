import styles from '../AddPost/AddPost.module.scss';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from "react-router-dom";
import shortid from "shortid";

const AddPost = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleAdd = e => {
      e.preventDefault();
      navigate('/');
      dispatch(addPost({ id: shortid(), title, author, publishedDate, shortDescription, content }));
      setTitle('');
      setAuthor('');
      setPublishedDate('');
      setShortDescription('');
      setContent('');
  };

  return <div className={styles.AddPost}>
     <Form>
      <Form.Group className="mb-3" controlId="TitleInput">
        <Form.Label>Title</Form.Label>
        <Form.Control 
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={e => setTitle(e.target.value)} />
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="AuthorInput">
        <Form.Label>Author</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Author" 
        value={author} 
        onChange={e => setAuthor(e.target.value)}/>
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="DatePublishedInput">
        <Form.Label>Date published</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter date format: DD-MM-YYYY" 
        value={publishedDate} 
        onChange={e => setPublishedDate(e.target.value)}/>
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="shortDescription">
      <Form.Label>Short description</Form.Label>
      <Form.Control
        as="textarea"
        placeholder="Leave comment here"
        rows={4}
        value={shortDescription} 
        onChange={e => setShortDescription(e.target.value)}
      />
    </Form.Group>
    <br />
    <Form.Group controlId="mainContent">
      <Form.Label>Main content</Form.Label>
      <Form.Control
        as="textarea"
        placeholder="Leave comment here"
        rows={8}
        value={content} 
        onChange={e => setContent(e.target.value)}
      />
    </Form.Group>
    <Button onClick={handleAdd} variant='primary' type='submit'>Add Post</Button>
    </Form>
  </div>
}

export default AddPost;