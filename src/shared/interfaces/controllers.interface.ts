/* eslint-disable @typescript-eslint/no-unused-vars */
export interface IController<O, Dto> {
  create(req, res): Promise<O>;
  update(req, res): Promise<O>;
  get(req, res): Promise<O>;
  getById(id: number, req, res): Promise<O>;
  delete(id: number, req, res): Promise<O>;
}
