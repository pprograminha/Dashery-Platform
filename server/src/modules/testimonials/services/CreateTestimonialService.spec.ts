import FakeTestimonialsRepository from '../infra/typeorm/repositories/fakes/FakeTestimonialsRepository'
import CreateTestimonialService from './CreateTestimonialService'

let fakeTestimonialsRepository: FakeTestimonialsRepository

let createTestimonial: CreateTestimonialService

describe('CreateTestimonial', () => {
  beforeEach(() => {
    fakeTestimonialsRepository = new FakeTestimonialsRepository()

    createTestimonial = new CreateTestimonialService(
      fakeTestimonialsRepository,
    )
  })
  it('should be able to create a testimonial', async () => {
    const description = 'Xxxxxxxx Xxxxxx XXxxxxx xxxxXxxx xXXxxxx'

    const testimonial = await createTestimonial.execute({
      description,
      title: 'Xxxxxx'
    })

    expect(testimonial).toHaveProperty('id')
    expect(testimonial.description).toBe(description)
  })

})