import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductComponent extends Component {
  @tracked number = 0;

  get productImage() {
    return this.args.product.colors[0].image;
  }
}
