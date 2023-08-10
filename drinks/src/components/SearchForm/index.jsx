import React from 'react'
import {Formik, Field, ErrorMessage} from 'formik'
import {Form, Row, Alert, Col, Button} from 'react-bootstrap'
import { object } from 'prop-types'
import * as Yup from 'yup'
import { useCategories } from '../../hooks/useCategories'

export const SearchForm = () => {

  const {categories} = useCategories()

  console.log(categories);

  const initialValues = {
    name: '',
    category: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio')
  })

  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
    >
      
      {
        (formik) => (
          <Form onSubmit={formik.handleSubmit}>
            
            <Row>
              <Col md={6}>
               <Form.Group>
                <Form.Label htmlFor='name'>Nombre de la bebida</Form.Label>
                <Field 
                id='name'
                type='text'
                name='name'
                placecolder='Ej. Tequila, vodka, etc'
                as={Form.Control}
                />
                <ErrorMessage 
                name='name'
                component={Form.text}
                className='danger'
                />
               </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor='category' >Categoria de bebida</Form.Label>
                  <Field
                  id='category'
                  name='category'
                  as={Form.Select}
                  >
                    <option value='' hidden>Selecciona la categoria</option>
                    {
                      categories.map(category => (
                        <option 
                        value={category.strCategory}
                        key={category.strCategory}
                        >
                          {category.strCategory}
                        </option>
                      ))
                    }
                  </Field>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Button
                variant='danger'
                disabled={false}
                type='submit'
                >
                  Buscar bebidas
                </Button>
              </Col>
            </Row>
          </Form>
        )
      }

    </Formik>
  )
}
