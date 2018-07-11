import { CleanFilter } from './CleanFilter';

export class CoreHeading extends CleanFilter {

  constructor() {
    super( 'core-heading' );
  }

  hookCallback( attributes, name, innerBlocks ) {
    attributes.content = wp.element.renderToString( attributes.content );
    attributes.heading = attributes.nodeName.toLowerCase();
    return attributes;
  }

}