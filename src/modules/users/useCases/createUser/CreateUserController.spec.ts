import request from 'supertest'
import {app} from '../../../../app'

describe('Create user controller', () => {
    it('create user', async () => {
        const response = await request(app).post('/api/v1/users').send({
            name: 'bruno',
            email: 'brunohenr@gmail.com',
            password: '123123'
        })

        expect(response.status).toBe(201)
    })


})