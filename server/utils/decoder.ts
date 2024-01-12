import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

interface jwtPayloadType {
    id:string
}

const jwt_secret:any = process.env.JWT_SECRET;

export const decoder = async (token:string) =>{
    const decoded = await jwt.verify(token, jwt_secret)
    return decoded.id;

}