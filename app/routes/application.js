import Route from '@ember/routing/route';

export default class Application extends Route {
  async model() {
    console.log('fetching idk');
    let module = await import('../util/idk.js');

    console.log(module);

    return module;
  }
}
