<?php


namespace App\Lib\BlogBundle;


use App\Lib\BlogBundle\DependencyInjection\BlogBundleExtension;
use App\Lib\BlogBundle\Service\BlogInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class LibBlogBundle extends Bundle
{
    public function build(ContainerBuilder $container)
    {
        return new BlogBundleExtension();
        parent::build($container);
        $container->registerForAutoconfiguration(BlogInterface::class)->addTag(BlogInterface::TAG);
    }

}
