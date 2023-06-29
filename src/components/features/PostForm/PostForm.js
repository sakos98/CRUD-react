import styles from '../PostForm/PostForm.module.scss';
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleAdd = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  }

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
 <Button onClick={handleAdd} variant='primary' type='submit'>{actionText}</Button>
 </Form>
</div>
}

export default PostForm;