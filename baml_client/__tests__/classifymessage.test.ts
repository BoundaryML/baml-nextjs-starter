// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck
/* eslint-disable */

import b from '../';

import { FireBamlEvent, traceAsync } from '@boundaryml/baml-core/ffi_layer';


describe('test_case:blue_dolphin', () => {
  const test_fn = traceAsync('blue_dolphin', 'null', [['impl', 'string']], 'positional', async (impl) => {
    FireBamlEvent.tags({
      'test_dataset_name': 'ClassifyMessage',
      'test_case_name': 'test',
      'test_case_arg_name': `test_blue_dolphin[ClassifyMessage-${impl}]`,
      'test_cycle_id': process.env.BOUNDARY_PROCESS_ID || 'local-run',
    });
    const test_case = { "message": "This is so frustrating, i bought a laptop and it\'s not working properly. I want to return it and get my money back. I\'m so disappointed", "message_date": "2019-01-01T00:00:00Z" };
    const result = await b.ClassifyMessage.getImpl(impl).run(
      test_case
    );
  });

  describe('function:ClassifyMessage', () => {
    test('impl:level1', async () => {
      await test_fn('level1');
    }, 60000);
  });
});

describe('test_case:cancel_order', () => {
  const test_fn = traceAsync('cancel_order', 'null', [['impl', 'string']], 'positional', async (impl) => {
    FireBamlEvent.tags({
      'test_dataset_name': 'ClassifyMessage',
      'test_case_name': 'test',
      'test_case_arg_name': `test_cancel_order[ClassifyMessage-${impl}]`,
      'test_cycle_id': process.env.BOUNDARY_PROCESS_ID || 'local-run',
    });
    const test_case = { "message": "I would like to cancel my order!", "message_date": "2021-01-01T00:00:00Z" };
    const result = await b.ClassifyMessage.getImpl(impl).run(
      test_case
    );
  });

  describe('function:ClassifyMessage', () => {
    test('impl:level1', async () => {
      await test_fn('level1');
    }, 60000);
  });
});

describe('test_case:case1', () => {
  const test_fn = traceAsync('case1', 'null', [['impl', 'string']], 'positional', async (impl) => {
    FireBamlEvent.tags({
      'test_dataset_name': 'ClassifyMessage',
      'test_case_name': 'test',
      'test_case_arg_name': `test_case1[ClassifyMessage-${impl}]`,
      'test_cycle_id': process.env.BOUNDARY_PROCESS_ID || 'local-run',
    });
    const test_case = { "message": "Hi! I\'m having an issue with my account. Can you help me?", "message_date": "2019-01-01T00:00:00Z" };
    const result = await b.ClassifyMessage.getImpl(impl).run(
      test_case
    );
  });

  describe('function:ClassifyMessage', () => {
    test('impl:level1', async () => {
      await test_fn('level1');
    }, 60000);
  });
});


