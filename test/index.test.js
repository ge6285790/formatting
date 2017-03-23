import chai from 'chai';
import Formatting from '../src';

const expect = chai.expect;

describe('Constructor Formatting', () => {

    describe('#Value Format', () => {
      const valueFormat = new Formatting('value');

      it('leading function test => insert leading number', () => {
        expect(valueFormat.leading(1, 3, 0)).to.eql('001');
        expect(valueFormat.leading(2, 4, 1)).to.eql('1112');
        expect(valueFormat.leading(8, 4, 9)).to.eql('9998');
      });

      it('leading function test => insert leading text', () => {
        expect(valueFormat.leading('test', 3, 0)).to.eql('test');
        expect(valueFormat.leading('test', 6, 0)).to.eql('00test');
        expect(valueFormat.leading('test', 6, 1)).to.eql('11test');
      });

      it('tailing function test => insert tail number', () => {
        expect(valueFormat.tailing(1, 3, 0)).to.eql('100');
        expect(valueFormat.tailing(2, 4, 1)).to.eql('2111');
        expect(valueFormat.tailing(8, 4, 9)).to.eql('8999');
      });

      it('tailing function test => insert tail text', () => {
        expect(valueFormat.tailing('test', 3, 0)).to.eql('test');
        expect(valueFormat.tailing('test', 6, 0)).to.eql('test00');
        expect(valueFormat.tailing('test', 6, 1)).to.eql('test11');
      });

      it('tailing function test => insert tail text', () => {
        expect(valueFormat.tailing('test', 3, 0)).to.eql('test');
        expect(valueFormat.tailing('test', 6, 0)).to.eql('test00');
        expect(valueFormat.tailing('test', 6, 1)).to.eql('test11');
      });

      it('sequence function test => insert sequence text', () => {
        expect(valueFormat.sequence('0000000000000', ':', 4)).to.eql('0000:0000:0000:0');
        expect(valueFormat.sequence('000000000000', '-', 3)).to.eql('000-000-000-000');
        expect(valueFormat.sequence('dsfgrdsfgerasd', '-', 5)).to.eql('dsfgr-dsfge-rasd');
      });

      it('insert function test => insert text', () => {
        expect(valueFormat.insert('1234567', ':', 2)).to.eql('12:34567');
        expect(valueFormat.insert('1234567', 'aaa', 3)).to.eql('123aaa4567');
      });

      it('replace function test => replace text', () => {
        expect(valueFormat.replace('123456', '2', 'word')).to.eql('1word34567');
        expect(valueFormat.replace('123456', '9', 'word')).to.eql('123456');
      });

      valueFormat.replaceWithRange('123456', 'word', 2, 5);
    });
});
