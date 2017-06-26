'use strict';

const expect = require('expect');
const SLL = require('../index.js');

describe('testing linked list methods', () => {
  describe('testing append node', () => {
    it('should return 5 as the value of the head', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      expect(head.value).toEqual(5);
    });
    it('should return the value of the fourth node', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(21));
      expect(head.next.next.next.value).toEqual(21);
    });
    it('should return null for the next of the fourth node', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(21));
      let lastNode = head.next.next.next.next;
      expect(lastNode).toEqual(null);
    });
  });
  describe('testing the reverse node method', () => {
    it('should reverse the list and return 21 as the head', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(21));
      head = head.reverse();
      expect(head.next.next.next.value).toEqual(5);
    });
    it('should reverse the list and return 16 for next value of the second from head', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(21));
      head = head.reverse();
      expect(head.next.value).toEqual(16);
    });
    it('should reverse the list and return null for the next of 5', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(21));
      let lastNode = head.next.next.next.next;
      head = head.reverse();
      expect(lastNode).toEqual(null);
    });
  });
  describe('testing the remove node method', () => {
    it('should return null as the value for the next of head after removing all nodes besides the head', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.remove(head);
      expect(head.next).toEqual(null);
    });
    it('should expect 21 as the value of the third node after removing 16', () => {
      let head = new SLL(5);
      console.log(head);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(21));
      head.remove(head);
      expect(head.next.next.value).toEqual(21);
    });
    it('should return null as the value for the next of the last node', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(21));
      head.remove(head);
      expect(head.next.next.next).toEqual(null);
    });
  });
});
