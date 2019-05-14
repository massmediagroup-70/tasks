<?php


namespace App\Lib\BlogBundle\DependencyInjection;


use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder();
        $rootNode = $treeBuilder->root('lib_blog_bundle');

        $rootNode
            ->children()
            ->scalarNode('file')->defaultValue('')->end()
            ->scalarNode('alias')->defaultValue('')->end()
            ->scalarNode('app_id')->defaultValue('')->end()
            ->scalarNode('secret')->defaultValue('')->end()
            ->booleanNode('cookie')->defaultTrue()->end()
            ->arrayNode('permissions')
            ->canBeUnset()->prototype('scalar')->end()->end()
            ->end()
        ;

        return $treeBuilder;
    }

}
