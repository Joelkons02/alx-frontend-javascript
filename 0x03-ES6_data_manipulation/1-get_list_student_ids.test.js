import getListStudentIds from './1-get_list_student_ids';

describe('getListStudentIds', () => {
  it('should return an array of student IDs', () => {
    expect.assertions(1);

    const studentIds = getListStudentIds([]);

    expect(Array.isArray(studentIds)).toBe(true);
    studentIds.forEach((studentId) => {
      expect(typeof studentId).toBe('number');
    });
  });
});
