import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { Testimonial } from '../models/Testimonial'
import { TestimonialRepository } from '../repositories/TestimonialRepository'

export class TestimonialController {
   async show(req: Request, res: Response) {
      const testimonialRepository = getCustomRepository(TestimonialRepository)
      const testimonials = await testimonialRepository.find()

      return res.status(200).json(testimonials)
   }
   async create(req: Request, res: Response) {
      const { username, testimonial } = req.body
      const testimonialRepository = getCustomRepository(TestimonialRepository)
      try {
         const testimonialr = testimonialRepository.create({
            username,
            testimonial,
         })

         await testimonialRepository.save(testimonialr)

         return res.status(201).json(testimonialr)
      } catch (error) {
         return res.status(400).json({ msg: error })
      }
   }
   async destroy(req: Request, res: Response) {
      const { id } = req.params
      const testimonialRepository = getCustomRepository(TestimonialRepository)

      const testimonial = await testimonialRepository.findOne(id)
      await testimonialRepository.delete(id)

      if (!testimonial) return res.status(400).json({ msg: 'not found' })
      return res.json(testimonial)
   }
   async update(req: Request, res: Response) {
      const { id } = req.params
      const { testimonial, user_image, username } = <Testimonial>req.body
      const testimonialRepository = getCustomRepository(TestimonialRepository)

      await testimonialRepository.update(
         { id },
         { testimonial, user_image, username }
      )
      const testimonialu = await testimonialRepository.findOne(id)

      if (!testimonialu) return res.status(400).json({ msg: 'not found' })
      return res.json(testimonialu)
   }
}
