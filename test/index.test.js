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
        expect(fileFormat.size(100)).to.eql('100 Bytes');
        expect(fileFormat.size(1001)).to.eql('1 KB');
        expect(fileFormat.size(100010)).to.eql('100.01 KB');
        expect(fileFormat.size(100050)).to.eql('100.05 KB');
        expect(fileFormat.size(1001000)).to.eql('1 MB');
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
        // url is not essential
        expect(urlFormat.getHash('https://google.com/#kkk#da#123')).to.eql({
          hash: 'kkk#da#123',
          hashArray: ['kkk', 'da', '123']
        });
      });

      it('getParamByName function test => get param by name', () => {
        // url is not essential
        expect(urlFormat.getParamByName('https://google.com?a=kyle&b=&scott', 'a')).to.eql('kyle');
        expect(urlFormat.getParamByName('https://google.com?a=kyle&b=&scott', 'b')).to.eql('');
        expect(urlFormat.getParamByName('https://google.com?a=kyle&b=&scott', 'scott')).to.eql('');
      });

      it('getParams function test => get params from url', () => {
        // url is not essential
        expect(urlFormat.getParams('https://google.com?a=kyle&b=&scott')).to.eql({
          a: 'kyle',
          b: '',
          scott: '',
        });
      });
    });

    describe('#Array Format', () => {
      const arrayFormat = new Formatting('array');

      it('arrayMerge function test => merge two array', () => {
        expect(arrayFormat.arrayMerge(['1', '2', '3'], ['3', '4'])).to.eql(['1', '2', '3', '4']);
        expect(arrayFormat.arrayMerge(['1', 'aaaa', '3'], ['aaaa', '4'])).to.eql(['1', 'aaaa', '3', '4']);
        expect(arrayFormat.arrayMerge([{a: 1}, '3'], ['aaaa', '4'])).to.eql([{a: 1}, '3', 'aaaa', '4']);
        expect(arrayFormat.arrayMerge([['a','1'], '3'], ['aaaa', '4'])).to.eql([['a','1'], '3', 'aaaa', '4']); // 物件、矩陣也會下去比對
        expect(arrayFormat.arrayMerge([['a','1',[1, 2]], [1],'3'], [[2], 'aaaa', '4'])).to.eql([['a','1',[1, 2]], [1], '3', [2], 'aaaa', '4']); // 物件、矩陣也會下去比對
      });

      it('arraySameValue function test => get same value in two array', () => {
        expect(arrayFormat.arraySameValue(['1', '2', '3'], ['3', '4'])).to.eql(['3']);
        expect(arrayFormat.arraySameValue(['1', 'aaaa', '3'], ['aaaa', '4'])).to.eql(['aaaa']);
        expect(arrayFormat.arraySameValue([{a: 1}, '3'], [{a: 1}, 'aaaa', '4'])).to.eql([{a: 1}]);
        expect(arrayFormat.arraySameValue([['a','1'], '3'], [['a','1'], 'aaaa', '4'])).to.eql([['a','1']]); // 物件、矩陣也會下去比對
        expect(arrayFormat.arraySameValue([['a','1', [1, 2]], [1], [2], '3'], [['a','1', [1, 2]], [1],'aaaa', '4'])).to.eql([['a','1', [1, 2]], [1]]); // 物件、矩陣也會下去比對
      });

      it('arrayRemoveValue function test => remove value from array1 if it is same as value in array2', () => {
        expect(arrayFormat.arrayRemoveValue(['1', '2', '3'], ['3', '4'])).to.eql(['1', '2']);
        expect(arrayFormat.arrayRemoveValue(['1', 'aaaa', '3'], ['aaaa', '4'])).to.eql(['1', '3']);
        expect(arrayFormat.arrayRemoveValue([{a: 1}, '3'], [{a: 1}, 'aaaa', '4'])).to.eql(['3']);
        expect(arrayFormat.arrayRemoveValue([['a','1'], '3'], [['a','1'], 'aaaa', '4'])).to.eql(['3']); // 物件、矩陣也會下去比對
        expect(arrayFormat.arrayRemoveValue([['a','1', [1, 2]], [1], [2], '3'], [['a','1', [1, 2]], [1],'aaaa', '4'])).to.eql([[2], '3']); // 物件、矩陣也會下去比對
      });

      it('arrayNonrepeatValue function test => get non-reapeat value from two array', () => {
        expect(arrayFormat.arrayNonrepeatValue(['1', '2', '3'], ['3', '4'])).to.eql(['1', '2', '4']);
        expect(arrayFormat.arrayNonrepeatValue(['1', 'aaaa', '3'], ['aaaa', '4'])).to.eql(['1', '3', '4']);
        expect(arrayFormat.arrayNonrepeatValue([{a: 1}, '3'], [{a: 1}, 'aaaa', '4'])).to.eql(['3', 'aaaa', '4']);
        expect(arrayFormat.arrayNonrepeatValue([['a','1'], '3'], [['a','1'], 'aaaa', '4'])).to.eql(['3', 'aaaa', '4']); // 物件、矩陣也會下去比對
        expect(arrayFormat.arrayNonrepeatValue([['a','1', [1, 2]], [1], [2], '3'], [['a','1', [1, 2]], [1],'aaaa', '4'])).to.eql([[2], '3', 'aaaa', '4']); // 物件、矩陣也會下去比對
      });

    });

    describe('#Object Format', () => {
      const objectFormat = new Formatting('url');

      it('deepMerge function test => deep merge two object', () => {
        expect(objectFormat.deepMerge({a: 1, c: 3}, {b: 2, c: 2})).to.eql({a: 1,b: 2,c: 2});
        expect(objectFormat.deepMerge({a: 1, c: { d: 4 }}, {b: 2, c: { e: 5 }})).to.eql({a: 1,b: 2,c: {d: 4,e: 5}});
        const obj1 = {a: 1,c: {d: 4,f: {name: 'kyle',age: 26},g: {age: 29}}};
        const obj2 = {b: 2,c: {e: 5,f: {name: 'kyle',age: 27},g: {name: 'scott'}}};
        const result = {a: 1,b: 2,c: {d: 4,e: 5,f: {name: 'kyle',age: 27},g: {name: 'scott',age: 29}}};
        expect(objectFormat.deepMerge(obj1, obj2)).to.eql(result);
      });

      it('deepEuqal function test => compare two object', () => {
        expect(objectFormat.deepEuqal({a: 2, c: 3}, {a: 2, c: 3})).to.eql(true);
        expect(objectFormat.deepEuqal({a: 1, c: { d: 4 }}, {b: 2, c: { e: 5 }})).to.eql(false);
      });
    });

});
