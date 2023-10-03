import getListStudents from './0-get_list_students';

describe('getListStudents', () => {
  it('should return an array of student objects', () => {
    expect.assertions(10); // Adjust the number of assertions to match the actual number

    const students = getListStudents();
    expect(Array.isArray(students)).toBe(true);
    students.forEach((student) => {
      expect(typeof student.id).toBe('number');
      expect(typeof student.firstName).toBe('string');
      expect(typeof student.location).toBe('string');
    });
  });
});
