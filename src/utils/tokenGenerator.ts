import jwt, { SignOptions } from 'jsonwebtoken';

// const secret = process.env.JWT_SECRET as string;

// const jwtConfig: SignOptions = { expiresIn: '7d', algorithm: 'HS256' };

// const tokenGenerator = (user: string): string => jwt.sign({ data: user }, secret, jwtConfig);

// export default tokenGenerator;

export default class TokenGenerator {
  private secret: string;

  private jwtConfig: SignOptions;

  private user: string;

  constructor(user: string) {
    this.secret = process.env.JWT_SECRET as string;
    this.jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    this.user = user;
  }

  public generate = (): string => jwt.sign({ data: this.user }, this.secret, this.jwtConfig);
}