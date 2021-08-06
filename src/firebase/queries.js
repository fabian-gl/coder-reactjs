import { getFirestoreConnection } from '../firebase/config';


export const getProductsByCategory = category => {
    return new Promise((resolve, reject) => {
        const conn = getFirestoreConnection()
        conn.collection('store').where('category', '==', category).get()
        .then(response => {
            const productos = response.docs.map(doc => ({...doc.data(), id: doc.id}))
            resolve(productos)
        })
        .catch(reject)
    })
}

export const getProductById = id => {
    return new Promise((resolve, reject) => {
        const conn = getFirestoreConnection()
        conn.collection('store').where('id', '==', id).get()
        .then(response => {
            const productos = response.docs.map(doc => ({...doc.data(), id: doc.id}))
            resolve(productos)
        })
        .catch(reject)
    })
}

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        const conn = getFirestoreConnection()
        conn.collection('store').get()
        .then(response => {
            const productos = response.docs.map(doc => ({...doc.data(), id: doc.id}))
            resolve(productos)
        })
        .catch(reject)
    })
}

export const uploadJsonToFirebase = (arrayOfProductObjects) => {
    const conn = getFirestoreConnection()

    for (const producto of arrayOfProductObjects)
    {
        conn.collection('store').doc().set({
            title: producto.title,
            description: producto.description,
            category: producto.category,
            price: producto.price,
            pictureUrl: producto.pictureUrl,
        })
    }
}