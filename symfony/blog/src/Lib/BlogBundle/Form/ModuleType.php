<?php


namespace App\Lib\BlogBundle\Form;


use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ModuleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('post', PostType::class, [
                'attr'=> ['class'=> 'border col-lg-12'],
            ])
            ->add('comments', CollectionType::class, [
                'entry_type' => CommentType::class,
                'entry_options' => [
                    'attr'=> ['class'=> 'comment border col-lg-12'],
                ],
                'allow_add' => true,
                'by_reference' => false,
                'label' => 'Comments'
            ])
            ->add('add_comment', ButtonType::class)
            ->add('save', SubmitType::class)


        ;
    }
}
