import { getFirestoreConnection, getFirebase } from '../firebase/config';

export const getFirestoreTimestamp = () => {
    return getFirebase().firestore.Timestamp.fromDate(new Date())
}

export const setOrder = order => {
    const conn = getFirestoreConnection()
    return conn.collection('orders').add(order)    
}

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
        conn.collection('store').doc(id).get()
        .then(response => {
            if (response.exists) resolve({...response.data(), id: response.id})
            else resolve(null)
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

export const uploadJsonToFirebase = (arrayOfObjects) => {
    const conn = getFirestoreConnection()

    for (const producto of arrayOfObjects)
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