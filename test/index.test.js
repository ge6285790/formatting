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
        expect(valueFormat.insert('123', 'aaa', 4)).to.eql('123aaa');
      });

      it('replace function test => replace text', () => {
        expect(valueFormat.replace('123456', '2', 'word')).to.eql('1word3456');
        expect(valueFormat.replace('123456', '9', 'word')).to.eql('123456');
      });

      it('replaceWithRange function test => replace text with range', () => {
        expect(valueFormat.replaceWithRange('123456', 'word', 2, 5)).to.eql('12word6');
        expect(valueFormat.replaceWithRange('1234567', 'word', 1, 6)).to.eql('1word7');
        expect(valueFormat.replaceWithRange('123456', 'word', 2, 9)).to.eql('12word');
        expect(valueFormat.replaceWithRange('123456', 'word', 0, 9)).to.eql('word');
      });

    });

    describe('#File Format', () => {
      const fileFormat = new Formatting('file');

      it('size function test => count file size', () => {
        expect(fileFormat.size(100)).to.eql('100 KB');
        expect(fileFormat.size(1001)).to.eql('1 MB');
        expect(fileFormat.size(100010)).to.eql('100.01 MB');
        expect(fileFormat.size(100050)).to.eql('100.05 MB');
        expect(fileFormat.size(1001000)).to.eql('1 GB');
      });

      it('duration function test => count duration time', () => {
        expect(fileFormat.duration(10)).to.eql('00:00:10');
        expect(fileFormat.duration(100)).to.eql('00:01:40');
        expect(fileFormat.duration(3540)).to.eql('00:59:00');
        expect(fileFormat.duration(3600)).to.eql('01:00:00');
        expect(fileFormat.duration(3705)).to.eql('01:01:45');
        expect(fileFormat.duration(36000)).to.eql('10:00:00');
      });
    });

    describe('#Url Format', () => {
      const urlFormat = new Formatting('url');

      it('getHash function test => get url hash', () => {
        expect(urlFormat.getHash('https://google.com/#kkk#da#123')).to.eql({
          hash: 'kkk#da#123',
          hashArray: ['kkk', 'da', '123']
        });
        expect(urlFormat.getParamByName('https://google.com?a=kyle&b=&scott', 'a')).to.eql('kyle');
        // expect(fileFormat.size(1001)).to.eql('1 MB');
        // expect(fileFormat.size(100010)).to.eql('100.01 MB');
        // expect(fileFormat.size(100050)).to.eql('100.05 MB');
        // expect(fileFormat.size(1001000)).to.eql('1 GB');
      });

      // it('duration function test => count duration time', () => {
      //   expect(fileFormat.duration(10)).to.eql('00:00:10');
      //   expect(fileFormat.duration(100)).to.eql('00:01:40');
      //   expect(fileFormat.duration(3540)).to.eql('00:59:00');
      //   expect(fileFormat.duration(3600)).to.eql('01:00:00');
      //   expect(fileFormat.duration(3705)).to.eql('01:01:45');
      //   expect(fileFormat.duration(36000)).to.eql('10:00:00');
      // });
    });

});
